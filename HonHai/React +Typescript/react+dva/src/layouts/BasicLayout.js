import React, { Component, PureComponent } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';


@connect(({ global }) =>({global}))
class BasicLayout extends Component  {

  constructor(props) {
    super(props);
  }


  render (){
    const { location, routerData, global } =  this.props;
    const { menu, flatMenu } = global;
    const { childRoutes } = routerData;
    console.log(123123, this.props)
        return (
          <div>
            <Switch location={location}>{childRoutes}</Switch>
          </div>
        )
    }
};


export default BasicLayout
