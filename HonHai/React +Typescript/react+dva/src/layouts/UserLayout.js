import React, { Component, PureComponent } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';


@connect()
class UserLayout extends Component {

  constructor(props) {
    super(props);
  }

  render (){
        return (
          <div>
            User

          </div>
        )
    }
}


export default UserLayout
