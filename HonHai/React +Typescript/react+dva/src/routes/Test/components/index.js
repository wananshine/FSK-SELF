import React, { Component, PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

@connect(({ test }) => ({
  test
}))
class Test extends PureComponent {

  constructor(props) {
    super(props);
  }


  handleDelect(){
    const { dispatch, effects } = this.props;
    console.log(this.props)
    dispatch({
      type: 'TestPage/delect',
      payload: {
        ID: 123
      }
    })
  }

  render (){
        return (
          <div>
            测试页面
            <Button onClick={()=>{ this.handleDelect() }}>Delete</Button>
          </div>
        )
    }
};

const tpl = ({ dispatch }) => {
  return (
    <div>123</div>
  );
};

export default Test
