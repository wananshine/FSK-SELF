import React, { Component, PureComponent } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import LeftMenuBar from '@/components/MenuBar/LeftMenuBar'
import NavBar from '@/components/NavBar/NavBar'
import BreadCrumbBar from '@/components/BreadCrumbBar/BreadCrumb'


const BasicLayoutGrid = styled.div`
  display: flex;
  background-color: #eee;
`

const MenuCol = styled.div`

`

const ContentCol = styled.div`

`

@connect(({ global }) =>({global}))
class BasicLayout extends Component  {

  constructor(props) {
    super(props);

    // 获取左侧menu
    props.dispatch({
      type: 'global/getMenu'
    });

  }


  render (){
    const { dispatch, location, routerData, global } =  this.props;
    const { menu, flatMenu } = global;
    console.log('layout:',this.props)
    const { childRoutes } = routerData;
        return (
          <BasicLayoutGrid>

            <MenuCol>

              <LeftMenuBar menu={menu} { ...this.props } />

            </MenuCol>


            <ContentCol>

              <div class="nav-row">
                <NavBar />
              </div>

              <div class="breadcrumb-row">
                <BreadCrumbBar />
              </div>

              <div class="panel-row">
                <Switch location={location}>{childRoutes}</Switch>
              </div>

            </ContentCol>

          </BasicLayoutGrid>
        )
    }
};




export default BasicLayout
