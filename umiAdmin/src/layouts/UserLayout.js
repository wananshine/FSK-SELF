import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from '@/pages/login/component/index'
import Register from '@/pages/register/component/index'
// import styles from './styles/BasicLayout';

class UserLayout extends React.PureComponent{
  render(){
    console.log('this.props:',this.props)
    return (
      <div>
        <Switch>
          <Route exact={true} path='/sing' component={Login}></Route>
          <Route exact={true} path='sing/login' component={Login}></Route>
          <Route exact={true} path='/register' component={Register}></Route>
        </Switch>
      </div>
    );
  }
}


export default UserLayout


