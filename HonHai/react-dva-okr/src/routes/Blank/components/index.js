import React, { Component, PureComponent, useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Button } from 'antd';


@connect()
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


const Tpl = ({ dispatch }) => {
  return (
    <div>Blank</div>
  );
};




export default Blank
