import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import styled from 'styled-components'
import { Button } from 'antd';
import SettingsMenu from './menu';


@connect()
class GeneralSettings extends PureComponent {

  constructor(props) {
    super(props);

    // 获取Settings Menu
    props.dispatch({
      type: 'GeneralSettings/getSettingsMenu'
    });

  }

  render (){
        const { routerData } = this.props;
        const { childRoutes } = routerData;

        return (
          <div>
            <SettingsMenu {...this.props} />
            <Switch>{childRoutes}</Switch>
          </div>
        )
    }
}


const Tpl = ({ dispatch }) => {
  return (
    <div>Blank</div>
  );
};




export default GeneralSettings
