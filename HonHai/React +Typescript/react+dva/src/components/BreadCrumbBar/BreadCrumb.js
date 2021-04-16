import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import styled from 'styled-components'
import { Button } from 'antd';

const BreadCrumbRow = styled.div`
  min-height: 56px;
  line-height: 56px;
  padding: 10px 15px;
`

@connect()
class BreadCrumbBar extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){
        return (
          <BreadCrumbRow>
            <span>Typography</span>
            <span>Search</span>
            <span>Avatar</span>
          </BreadCrumbRow>
        )
    }
}




export default BreadCrumbBar
