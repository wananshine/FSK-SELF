import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styled from 'styled-components'
import _ from 'lodash';
import { Menu, Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SvgIcon from '@/components/SvgIcon'

const NavRow = styled.div`

  min-height: 68px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  .ant-menu-horizontal{
    line-height: 66px;
  }
  .nav-action{
    .nav-action-notice,
    .nav-action-set{
      cursor: pointer;
      padding: 0px 10px;
    }
  }
`

const BaseNavItem = (item)=>{
  return (
    <Menu.Item key={item.path}>
      <Link to={item.path} >{item.name}</Link>
    </Menu.Item>
  )
}

@connect()
class NavBar extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){
    const navs = [
      {
        name: 'OKR',
        icon: '',
        path: '/okr'
      },
      {
        name: '个人工作台',
        icon: '',
        path: '/userwork'
      },
      {
        name: '对齐视图',
        icon: '',
        path: '/viewboard'
      },
      {
        name: '数据看板',
        icon: '',
        path: '/databoard'
      }
    ]

    const { dispatch, location, menu } = this.props;
    let selectedKeys = location && location.pathname;  //当前选中
    let navProps = { selectedKeys }

    return (
          <NavRow>
            <Menu {...navProps}  onClick={this.handleClick} mode="horizontal">
              { _.map(navs, BaseNavItem) }
            </Menu>

            <div className="nav-action">

              <span className="nav-action-notice">
                <Link to="general_settings">通知</Link>
              </span>

              <span className="nav-action-set">
                <Link to="settings/cycle">设置</Link>
              </span>

              <Avatar icon={<UserOutlined />} />

            </div>
          </NavRow>
        )
  }
}




export default NavBar
