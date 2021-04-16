import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import styled from 'styled-components'
import { Button } from 'antd';

const NavRow = styled.div`
  min-height: 56px;
  line-height: 56px;
  padding: 10px 15px;
`

@connect()
class NavBar extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){
        return (
          <NavRow>
            <span>Typography</span>
            <span>Search</span>
            <span>Avatar</span>
          </NavRow>
        )
    }
}




export default NavBar
