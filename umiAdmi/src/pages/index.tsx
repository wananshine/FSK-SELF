import React from 'react';
import { Switch, Route } from 'umi'
import { renderRoutes } from 'react-router-config'

import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'


import Home from '@/pages/home/component/index'
import Users from '@/pages/users/component/index'


import Login from '@/pages/login/component/index'
import Register from '@/pages/register/component/index'

import styles from './index.less';

const b = [
  {
    path: '/page',
    component: BasicLayout,
  }
]

const u = [
  {
    path: '/sign',
    component: UserLayout,
  }
]

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
    routes: []
  },
  {
    path: '/',
    exact: true,
    redirect: '/home',
    component: BasicLayout,
    routes: [
      {
        path: '/home',
        component: Home,
      },
      {
          path: '/users',
          component: Users,
      }
    ]
  },
  {
    path: '/sign',
    component: BasicLayout,
    routes: [
      {
        path: '/login',
        component: Login,
      },
      {
          path: '/register',
          component: Register,
      }
    ]
  }
  
]


const routeConfigs = [
  {
    path: '/page',
    // exact: true,
    component: BasicLayout,
    routes: [],
  },
  {
    path: '/sign',
    redirect: '/sign/login',
    component: UserLayout,
    routes: [],
  },
]

export default (props) => {
  console.log('IndexPage:', props)
  return (
    <div>

      <Switch>
        {renderRoutes(routeConfigs)}
      </Switch>

          {/* <Switch>
            {renderRoutes( ['/sign'].includes(props.pathname) ? u : b)}
          </Switch> */}

      {/* {
        ['sign'].includes(props.pathname) ?
          <Switch>
            {renderRoutes(u)}
          </Switch>
          :
          <Switch>
            {renderRoutes(b)}
          </Switch>
      } */}
    
    </div>
  );
}
