import React, { useState } from 'react';
import { connect } from 'dva';
import { Layout, Card, Row, Col, Form, DatePicker, Input, Select, Button, Divider, Tooltip, Table, Tag, Space, Pagination, Modal, Icon   } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, CloseCircleOutlined, StopOutlined } from '@ant-design/icons';
import moment from 'moment';
import Panel from 'components/Panel';
import BaseComponent from 'components/BaseComponent';
import DataTable from 'components/DataTable';
import style from './index.module.less';
const { Header, Content, Footer } = Layout;
// const Pagination = DataTable.Pagination;

const { RangePicker } = DatePicker;
const { Option } = Select;

@connect(({ TaskNumberData, loading }) => ({
    TaskNumberData,
    loading: loading.models.TaskNumberData
}))




export default class extends BaseComponent {

    formRef = React.createRef();

    state = {
        visible: false,
        confirmLoading: false,
        formData: {}
    };

    getStartDate(){
        return new Date((new Date().getTime() - (5 * 24*60*60*1000))).toLocaleDateString().replace(/\//g,".");
    }
    getEndData(){
        return new Date().toLocaleDateString().replace(/\//g,".");
    }


    onReset(){
      this.formRef.current.resetFields();
    }

    //删除数据
    onDeleteRecords(record){
        const { dispatch } = this.props;
        Modal.confirm({
            title: '注意',
            icon: <ExclamationCircleOutlined />,
            content: '是否确认删除此笔数据？',
            onOk: () => {
                dispatch({
                    type: 'TaskNumberData/remove',
                    payload: record
                });
                console.log(record);
            },
            onCancel() {}
        });
    }


    //取消任务
    onCancelRecords(record){
        console.log(record)
        const { dispatch } = this.props;
        Modal.confirm({
            title: '注意',
            icon: <ExclamationCircleOutlined />,
            content: '是否确认取消此笔数据？',
            onOk: () => {
                dispatch({
                    type: 'TaskNumberData/cancel',
                    payload: {
                        taskCode: record.taskCode
                    }
                });
            },
            onCancel() {}
        });
    }


    //新增/编辑Modal Show
    onEdit = record =>{
        console.log('编辑Modal:', record);
        this.setState({
            ...this.state,
            visible: true,
            formData: (record && {
                partnameId:record.partnameId,
                partname: record.partname,
                count: record.count,
                partnameCountId: record.partnameCountId
            }) || {}
        });
    };

    handleOk(formData){
        console.log('formData:',formData);
        const { partnameCountId } = formData;
        const { TaskNumberData, dispatch } = this.props;
        if(partnameCountId){
            dispatch({
                type: 'TaskNumberData/update',
                payload: {
                    partnameId: String(formData.partnameId),
                    count: Number(formData.count),
                    partnameCountId: formData.partnameCountId
                }
            });
        }else{
            dispatch({
                type: 'TaskNumberData/save',
                payload: {
                    partnameId: String(formData.partnameId),
                    count: Number(formData.count)
                }
            });
        }
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                visible: false,
                confirmLoading: false,
                formData: {}
            });
        }, 1000)
    }

    handleCancel(){
        this.setState({
            visible: false,
        });
    }

    handleChange(val, key){
        console.log(val, key)
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [key]: val,
            }
        });
        console.log(val, this.state)
    }

    handleInput(val, key){
        let value = val.target.value;
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [key]: value
            }
        });
        console.log(value, this.state)
    }


    onChange(pageNumber, pageSize) {
      const { TaskNumberData, dispatch } = this.props;
      dispatch({
          type: 'TaskNumberData/getPageInfo',
          payload: {
              ...TaskNumberData,
              pageNum: pageNumber,
              pageSize: pageSize
          }
      });
  }


    //查询
    onFinish = values => {
        console.log(values);
        const { TaskNumberData, dispatch } = this.props;
        const object = {
            pageNum: 1,
            partname: values.partname || '',
            count: values.count || 0
        };
        dispatch({
            type: 'TaskNumberData/getPageInfo',
            payload: {
                ...TaskNumberData,
                ...object,
            }
        })

    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    }

    render() {
        // const [form] = Form.useForm();
        const { formData, visible, confirmLoading } = this.state;
        const { TaskNumberData, loading, dispatch } = this.props;
        const { pageData, pageNum, pageSize, pNameData, typeOptions, levelOptions, locOptions, employees } = TaskNumberData;
        const { total, rows } = pageData;
        const pNameOptions = (pNameData && pNameData.pNameOptions) || [];

        const dateFormat = 'YYYY/MM/DD';

        const formItemLayout = {
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
        };

        //表头
        const columns = [
          {
              title: '顺番',
              dataIndex: 'key',
              maxWidth: '100',
              align: 'center',
              render: (tags) => (
                  <span style={{textAlign: 'center'}}>{tags}</span>
              ),
          },
          {
              title: '品名',
              dataIndex: 'partname',
              // align: 'right',
          },
          {
              title: '任务次数',
              dataIndex: 'count',
          },
          {
              title: '',
              key: 'operation',
              render: (text, record) => (
                  <div>
                      <Button type="link" tooltip="修改" onClick={()=>{ this.onEdit(record) }} style={{fontSize: '18px'}}>
                          <EditOutlined />
                      </Button>

                      <Button type="link" tooltip="删除" onClick={()=>{ this.onDeleteRecords(record) }} style={{fontSize: '18px'}}>
                          <DeleteOutlined />
                      </Button>

                      {/*{*/}
                          {/*(['3', 3, '4', 4, '5',5].includes(record.runResult)) &&*/}
                              {/*<Button type="link" tooltip="取消" onClick={()=>{ this.onCancelRecords(record) }}  style={{fontSize: '18px'}}>*/}
                                  {/*<CloseCircleOutlined />*/}
                              {/*</Button>*/}
                      {/*}*/}

                  </div>
              ),
          }
        ];

        //表数据
        const dataSource = rows && rows.map((v, i)=>{
          v.key =  Number(i + 1) + (Number(pageNum) * Number(pageSize)) - Number(pageSize);
          return v;
        });


        return (
          <Layout className="">
              <Card title="">
                  <Header>
                      <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={()=>{this.onFinishFailed()}}>

                          <Row gutter={16}>
                              <Col span={6}>
                                  <Form.Item label="品名：" name="partname">
                                      <Select placeholder="请选择品名">
                                          {
                                              pNameOptions && pNameOptions.map((v, i)=>{
                                                  return <Option key={i.toString() + `${v.dictCode}`} value={v.dictValue}>{v.dictLabel}</Option>
                                              })
                                          }
                                      </Select>
                                  </Form.Item>
                              </Col>
                              <Col span={6}>
                                  <Form.Item label="任务次数：" name="count">
                                      <Input placeholder="请输入任务次数" autoComplete='off' />
                                  </Form.Item>
                              </Col>
                          </Row>

                          <Row gutter={16}>
                              <Button type="default" className={style.btnAction} onClick={()=>{this.onEdit()}}>新增</Button>
                              <Button type="primary" className={style.btnAction}  htmlType="submit">查询</Button>
                              <Button type="danger" className={style.btnAction} onClick={()=>{this.onReset()}}>重置</Button>
                          </Row>

                      </Form>
                  </Header>

                  <Divider />

                  <Content className={style.className}>

                      <div>
                          <Table loading={loading} pagination={false} columns={columns} dataSource={dataSource} bordered size="middle" />
                      </div>

                      {/*新增/修改页面弹框*/}
                      <Modal
                          destroyOnClose
                          title={formData.partnameCountId ? '修改' : '新增'}
                          width="680px"
                          okText="保存"
                          visible={visible}
                          confirmLoading={confirmLoading}
                          onOk={()=>{this.handleOk(formData)}}
                          onCancel={()=>{this.handleCancel()}}
                      >
                          <div>

                              <Form>

                                  <Form.Item label="品名："  {...formItemLayout}>
                                      <Select defaultValue={formData.partname}  onChange={(val)=>{this.handleChange(val, 'partnameId')}} placeholder="请选择品名" >
                                          {
                                              pNameOptions && pNameOptions.map((v, i)=>{
                                                  return <Option key={i.toString() + `${v.dictCode}`} value={v.dictCode}>{v.dictLabel}</Option>
                                              })
                                          }
                                      </Select>
                                  </Form.Item>

                                  <Form.Item label="任务次数："  {...formItemLayout}>
                                      <Input defaultValue={formData.count} onChange={(val)=>{this.handleInput(val, 'count')}} placeholder="请输入任务次数" />
                                  </Form.Item>
                              </Form>
                          </div>

                      </Modal>

                  </Content>

                  <br/>

                  <Footer>
                      <Pagination
                          hideOnSinglePage
                          showQuickJumper
                          showSizeChanger
                          current={pageNum}
                          defaultCurrent={pageNum}
                          total={total}
                          onShowSizeChange={(pageNumber, pageSize)=>{this.onChange(pageNumber, pageSize)}}
                          onChange={(pageNumber, pageSize)=>{this.onChange(pageNumber, pageSize)}}
                      />
                  </Footer>

              </Card>
          </Layout>
        );
  }
}


