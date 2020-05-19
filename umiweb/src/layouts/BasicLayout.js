import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Switch } from 'react-router';
import style from './styles/BasicLayout.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const BasicLayout = props => {
    console.log('props:', props);
    return (React.createElement("div", { className: style.normal },
        React.createElement(Layout, null,
            React.createElement(Header, { className: "header" },
                React.createElement("div", { className: "logo" })),
            React.createElement(Layout, null,
                React.createElement(Sider, { width: 200, className: "site-layout-background" },
                    React.createElement(Menu, { mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], style: { height: '100%', borderRight: 0 } },
                        React.createElement(SubMenu, { key: "sub1", icon: React.createElement(UserOutlined, null), title: "subnav 1" },
                            React.createElement(Menu.Item, { key: "1" }, "option1"),
                            React.createElement(Menu.Item, { key: "2" }, "option2"),
                            React.createElement(Menu.Item, { key: "3" }, "option3"),
                            React.createElement(Menu.Item, { key: "4" }, "option4")),
                        React.createElement(SubMenu, { key: "sub2", icon: React.createElement(LaptopOutlined, null), title: "subnav 2" },
                            React.createElement(Menu.Item, { key: "5" }, "option5"),
                            React.createElement(Menu.Item, { key: "6" }, "option6"),
                            React.createElement(Menu.Item, { key: "7" }, "option7"),
                            React.createElement(Menu.Item, { key: "8" }, "option8")),
                        React.createElement(SubMenu, { key: "sub3", icon: React.createElement(NotificationOutlined, null), title: "subnav 3" },
                            React.createElement(Menu.Item, { key: "9" }, "option9"),
                            React.createElement(Menu.Item, { key: "10" }, "option10"),
                            React.createElement(Menu.Item, { key: "11" }, "option11"),
                            React.createElement(Menu.Item, { key: "12" }, "option12")))),
                React.createElement(Layout, { style: { padding: '0 24px 24px' } },
                    React.createElement(Breadcrumb, { style: { margin: '16px 0' } },
                        React.createElement(Breadcrumb.Item, null, "Home"),
                        React.createElement(Breadcrumb.Item, null, "List"),
                        React.createElement(Breadcrumb.Item, null, "App")),
                    React.createElement(Content, { className: "site-layout-background", style: {
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        } },
                        React.createElement(Switch, null)))))));
};
export default BasicLayout;
//# sourceMappingURL=BasicLayout.js.map