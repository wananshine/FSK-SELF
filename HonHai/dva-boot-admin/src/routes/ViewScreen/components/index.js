import React from 'react';
import { connect } from 'dva';
import { Layout, Card, Row, Col, Form, DatePicker, TimePicker, Input, Button, Select, Divider, Table, Tag, Space, Pagination   } from 'antd';
import moment from 'moment';
import BaseComponent from 'components/BaseComponent';
import style from './index.module.less';
import createColumns from './columns';
const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;
const { Option } = Select;

let t;

@connect(({ ViewScreenData, loading }) => ({
    ViewScreenData,
    loading: loading.models.ViewScreenData
}))

export default class ProCard extends BaseComponent {

    formRef = React.createRef();


    getStartDate(){
        return new Date((new Date().getTime() - (5 * 24*60*60*1000))).toLocaleDateString().replace(/\//g,".");
    }
    getEndData(){
        return new Date().toLocaleDateString().replace(/\//g,".");
    }

    onReset(){
        this.formRef.current.resetFields();
        console.log(1)
    }

    //分页
    onChange(pageNumber, pageSize) {
      const { ViewScreenData, dispatch } = this.props;
      dispatch({
          type: 'ViewScreenData/getPageInfo',
          payload: {
              ...ViewScreenData,
              pageNum: pageNumber,
              pageSize: pageSize
          }
      });
    }

    //查询
    onFinish = values => {

        const { ViewScreenData, dispatch } = this.props;
        const startDate = [undefined].includes(values.datepicker) ? this.getStartDate() : ([null].includes(values.datepicker) ? '' : moment(values.datepicker[0]).format('YYYY.MM.DD'));
        const endDate = [undefined].includes(values.datepicker) ? this.getEndData() : ([null].includes(values.datepicker) ? '' : moment(values.datepicker[1]).format('YYYY.MM.DD'));
        const time = [undefined, null].includes(values.time) ? '' : moment(values.time).format('HH:mm');

        const object = {
            pageNum: 1,
            pageSize: ViewScreenData.pageSize || 10,
            startDate: startDate,
            endDate: endDate,
            time: time,
            partName: values.partName || '',
            line: values.lineId || '',
            lotNo: values.lotNo || ''
        };

        dispatch({
            type: 'ViewScreenData/getPageInfo',
            payload: {
                ...ViewScreenData,
                ...object,
            }
        })

    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    }

  render() {
      const { ViewScreenData, loading, dispatch } = this.props;
      const { pageData, pageNum, pageSize, pNameData, lineData, timingData, employees } = ViewScreenData;
      const { total, rows } = pageData;
      const lineOptions = (lineData && lineData.lineOptions) || [];
      const pNameOptions = (pNameData && pNameData.pNameOptions) || [];

      if(timingData && timingData[0]){

          window.clearTimeout(t);

          t = window.setTimeout(()=>{
              dispatch({
                  type: 'ViewScreenData/getPageInfo',
                  payload: {
                      pageNum: 1,
                      pageSize: 10,
                      startDate: '',
                      endDate: '',
                      time: '',
                      partName: '',
                      line: '',
                      lotNo: ''
                  }
              })
          }, timingData[0].dictValue * 1000)
      }

      //日期格式
      const dateFormat = 'YYYY/MM/DD';

      //时间格式
      const timeFormat = 'HH:mm';

      //表数据
      const dataSource = rows && rows.map((v, i)=>{
          v.key =  Number(i + 1) + (Number(pageNum) * Number(pageSize)) - Number(pageSize);
          return v;
      }).slice(0, 5);  //


      //表头
      const columns = createColumns(this, employees);


      return (
      <Layout className="">
          {/*<Card title="">*/}
              <Header style={{display: 'none'}}>
                  <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={()=>{this.onFinishFailed()}}>
                      <Row gutter={16}>
                          <Col span={6}>
                              <Form.Item label="日期：" name="datepicker">
                                  <RangePicker
                                      defaultValue={[moment(new Date((new Date().getTime() - (5 * 24*60*60*1000))).toLocaleDateString()), moment(new Date().toLocaleDateString()), dateFormat]}
                                      className={style.antPickerRange} />
                              </Form.Item>
                          </Col>
                          <Col span={6}>
                              <Form.Item label="时间：" name="time" style={{'display': 'none'}}>
                                  {/*defaultValue=""*/}
                                  <TimePicker format={timeFormat} />
                              </Form.Item>
                          </Col>
                      </Row>

                      <Row gutter={16}>
                          <Col span={6}>
                              <Form.Item label="品名：" name="partName">
                                  {/*defaultValue=""*/}
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
                              <Form.Item label="Line：" name="lineId">
                                  {/*defaultValue=""*/}
                                  <Select placeholder="请输入Line">
                                      {
                                          lineOptions && lineOptions.map((v, i)=>{
                                              return <Option key={i.toString() + `${v.dictCode}`} value={v.dictValue}>产线：{v.dictLabel}</Option>
                                          })
                                      }
                                  </Select>
                              </Form.Item>
                          </Col>
                          <Col span={6}>
                              <Form.Item label="LotNo：" name="lotNo">
                                  <Input placeholder="请输入LotNo" autoComplete="off" />
                              </Form.Item>
                          </Col>
                      </Row>

                      <Row gutter={16}>
                          <Button type="primary" className={style.btnAction} htmlType="submit">查询</Button>
                          <Button type="danger" className={style.btnAction} onClick={()=>{this.onReset()}}>重置</Button>
                      </Row>

                  </Form>
              </Header>

              {/*<Divider />*/}

              <Content className={style.table_box}>
                  <div>
                      <Table loading={loading} pagination={false} columns={columns} dataSource={dataSource} bordered size="middle" />
                  </div>
              </Content>

              <br/>

              <Footer style={{display: 'none'}}>
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


          {/*<canvas id='canvas' width="400" height="200"></canvas>*/}

          {/*</Card>*/}
      </Layout>
    );
  }
}
