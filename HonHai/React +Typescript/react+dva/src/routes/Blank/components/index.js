import React, { Component, PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';



const tpl = ({ dispatch }) => {

  return (
    <div>Blank</div>
  );
};


class Blank extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){
        return (
          <div>
            空白页
          </div>
        )
    }
}

export default Blank
