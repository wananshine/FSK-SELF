import React from 'react';
import { Switch, Route } from 'umi'
import { renderRoutes } from 'react-router-config'

import BasicLayout from './BasicLayout'
import UserLayout from './UserLayout'

const routes = [
    {
      path: '/',
      exact: true,
      component: BasicLayout,
    },
    {
      path: '/sign',
      exact: true,
      component: UserLayout,
    }
  ]

export default class IndexPage extends React.PureComponent{
   
    render() {
        const { children, location } = this.props
        console.log('IndexPage', location, this.props)
        return(
            <div>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>  
            </div>
        )
    }
}
