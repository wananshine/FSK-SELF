import React from 'react';
import { BrowserRouter, Switch, Route, Router, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Home from '@/pages/home/components/index'
import Users from '@/pages/users/component/index'

import Login from '@/pages/login/component/index'
import Register from '@/pages/register/component/index'

// import styles from './styles/BasicLayout';

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/users',
    component: Users,
  }
]


class BasicLayout extends React.PureComponent{

  componentDidMount(){
    this.checkLoginState()
  }

  // 检查有户是否登录
  checkLoginState() {
    // const token = window.sessionStorage.getItem('token');
    // if (!token) {
    //   this.props.history.replace('/sign/login')
    // }
  }

  render(){
    console.log('BasicLayout:', this.props)
    return (
      <div>
        <Switch>
          { renderRoutes(routes) }
        </Switch>
      </div>
    )
  }
}

export default BasicLayout
