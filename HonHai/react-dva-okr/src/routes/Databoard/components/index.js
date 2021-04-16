import React, { Component, PureComponent, useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Button } from 'antd';


@connect()
class DataBoard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){


        return (
          <div>
            数据看板
          </div>
        )
    }
}


const Tpl = ({ dispatch }) => {
  return (
    <div>Blank</div>
  );
};




export default DataBoard
