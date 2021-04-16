import React, { Component, PureComponent, useEffect, useState, useRef } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Button } from 'antd';



@connect()
class OKR extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){


        return (
          <div>
            okr
          </div>
        )
    }
}


const Tpl = ({ dispatch }) => {
  return (
    <div>Blank</div>
  );
};




export default OKR
