import React from 'react';
import { Switch, Route } from 'umi'
import { renderRoutes } from 'react-router-config'


import Login from '@/pages/login/component/index'
import Register from '@/pages/register/component/index'


const s = [
    {
        path: '/sign/login',
        exact: true,
        component: Login,
    },
    {
        path: '/sign/register',
        exact: true,
        component: Register,
    }
]

export default class UserLayout extends React.PureComponent{
    render() {
        const { children, location } = this.props
        console.log('UserLayout:', location, this.props)
        return(
            <div>  
                <Switch>
                    { renderRoutes(s) }
                </Switch>

                {/* <Switch>
                    <Route exact={true} path='/sign/login' component={Login}></Route>
                    <Route exact={true} path='/register' component={Register}></Route>
                </Switch> */}
            </div>
        )
    }
}
