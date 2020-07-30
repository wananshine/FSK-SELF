import React from 'react';
import { Switch, Route } from 'umi'
import { renderRoutes } from 'react-router-config'

import Home from '@/pages/home/component/index'
import Users from '@/pages/users/component/index'
import UsersDetail from '@/pages/users/detail/component/index'

import Canvas from '@/pages/canvas/component/index'

const r = [
    {
        path: '/page/home',
        exact: true,
        component: Home,
    },
    {
        path: '/page/canvas',
        exact: true,
        component: Canvas,
    },
    {
        path: '/page/users',
        exact: true,
        component: Users,
    },
    {
        path: '/page/users/:id',
        exact: true,
        component: UsersDetail,                                                       
    }
]



export default class BasicLayout extends React.PureComponent{
   
    componentDidMount(){
        this.checkLoginState()
      }
    
    // 检查有户是否登录
    checkLoginState() {
        const token = window.sessionStorage.getItem('token');
        if (!token) {
            this.props.history.replace('/sign/login')
        }
    }

    render() {
        const { children, location } = this.props;
        console.log('BasicLayout', this.props)
        console.log('BasicLayout-location', location)
        console.log('BasicLayout-children', children)
        return(
            <div>
                {/* {children} */}
                <Switch>
                    { renderRoutes(r) }
                </Switch>
            </div>
        )
    }
}
