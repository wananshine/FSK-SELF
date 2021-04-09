import React, { Component } from 'react';
import { connect, router } from 'dva';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';


const Test = () => {
  return (
    <div>
      空白页
      <Button>Delete{state}</Button>
    </div>
  );
};

//这里的example表示后面用this.props.example获取state（根节点）中exmpale命名空间（model的example.js中的state所有数据）的数据
const mapStateToProps = (state) =>{
    return {
        blank: state.blank,
    }
}

//通过这种方式来把model层的数据传递到当前组件了
// @connect(({ blank }) =>(blank))
// export default Test;


export default connect(mapStateToProps)(Test)
