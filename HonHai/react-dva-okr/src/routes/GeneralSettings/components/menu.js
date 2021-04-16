import { useState } from 'react';
import { Link } from 'dva/router';
import _ from 'lodash';
import styled from 'styled-components'
import { Menu } from 'antd';

const SettingsMenu = styled.div`
  width: 256px;
`


const SettingsMenuBar = (props)=>{

  const [menuList, setMenuList] = useState([
    { name: '周期设置', path: '/settings/cycle', icon: '' },
    { name: '进度更新频率设置', path: '/settings/update', icon: '' },
    { name: '专案组织设置', path: '/settings/organization', icon: '' }
  ]);

  const { dispatch, location } = props;
  let selectedKeys = location && location.pathname;  //当前选中
  let settingMenuProps = { selectedKeys }

  return(
    <SettingsMenu>
      <Menu
        {...settingMenuProps}
        style={{ width: 256 }}
        mode="inline"
      >
        { _.map(menuList, (m)=>{
            return (
              <Menu.Item key={m.path}>
                <Link to={m.path}>{m.name}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </SettingsMenu>
  )
};

export default SettingsMenuBar;
