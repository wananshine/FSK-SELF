import React from 'react';
import { Switch, Router, Route, Redirect, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'


import Home from '@/pages/home/components/index'
import Users from '@/pages/users/component/index'

import styles from './index.less';

const routeConfigs = [
  {
    path: '/',
    component: BasicLayout,
  },
  {
    path: '/sign',
    component: UserLayout,
  }
]

export default class IndexPage extends React.PureComponent{
  render(){
    console.log('IndexPage:',this.props)
    const token = window.sessionStorage.getItem('token')
    return(
      <div>
        <Switch>
          { renderRoutes(routeConfigs) }
        </Switch>

      </div>
    )
  }
}

// const IndexPage = (props)=>{
//   console.log(window.sessionStorage.getItem('token'))
//   const token = window.sessionStorage.getItem('token')
//   return (
//     <div>
//       <Switch>
//         <Route exact={true}  path='/' component={BasicLayout} />
//         <Route path='sign' component={UserLayout} />
//         {/*{renderRoutes( token ? routeConfigs : routeSign )}*/}
//       </Switch>
//     </div>
//   )
// }
// export default IndexPage
