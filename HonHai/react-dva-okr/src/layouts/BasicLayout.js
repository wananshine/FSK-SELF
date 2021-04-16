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
  flex-direction: column;

  height: 100%;

  background-color: #eee;

`

const MenuRow = styled.div`
  height: 68px;
`

const ContentRow = styled.div`
  min-height: calc(100% - 68px);
  padding: 30px 15px 0px;
  /* padding: 2.25rem 2.25rem .75rem; */
  overflow: hidden;
  /* background-color: #eee; */
  background-color: #edf1f7;
`

const ContentScroll = styled.div`
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
      width: .4em;
      height:.4em;
  }

  ::-webkit-scrollbar-thumb {
      background: #d9d9d9;
      cursor: pointer;
  }

  ::-webkit-scrollbar-track {
      background: 0 0;
  }
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

            <MenuRow>

              <NavBar { ...this.props } />

            </MenuRow>


            <ContentRow>
              <ContentScroll>
                <Switch location={location}>{childRoutes}</Switch>
              </ContentScroll>
            </ContentRow>

          </BasicLayoutGrid>
        )
    }
};




export default BasicLayout
