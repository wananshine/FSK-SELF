import React, { PureComponent, useEffect, useState, useRef } from 'react';
import { Link } from 'dva/router';
import _ from 'lodash'
import { Menu } from 'antd';
const { SubMenu } = Menu;



const styleFn = ()=>{
  return {
    divStyle: {
      height: '100%',
      backgroundImage: '',
      WebkitTransition: '', // note the capital 'W' here
      msTransition: '' // 'ms' is the only lowercase vendor prefix
    }
  }
}

const styleCss = styleFn();


const BaseMenuItem = (item)=> {
  return item.children && item.children.length > 0 ?
    <SubMenu key={item.path} title={item.name}>
      {item.children && _.map(item.children, BaseMenuItem)}
    </SubMenu>
   :
    <Menu.Item key={item.path}>
      <Link to={item.path} >{item.name}</Link>
    </Menu.Item>
}


class LeftMenuBar extends PureComponent {

  constructor(props) {
    super(props);
  }

  // handleClick = e => {
  //   this.props.history.push(e.key)
  // };

  render (){
    const { dispatch, location, menu } = this.props;
    let selectedKeys = location && location.pathname;  //当前选中
    let menuProps = { selectedKeys }

    return (
      <div style={styleCss.divStyle}>
        <Menu
          {...menuProps}
          onClick={this.handleClick}
          style={{ width: 256, height: '100%' }}
          mode="inline"
        >
          { _.map(menu, BaseMenuItem) }
        </Menu>

      </div>
    )
  }
}

export default LeftMenuBar
