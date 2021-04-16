import { createRoutes } from '../utils/core';

import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';

import Blank from './Blank';
import Test from './Test';

import OKR from './OKR';  //OKR
import UserWork from './UserWork';  //个人工作台
import Viewboard from './Viewboard';  //对齐视图
import Databoard from './Databoard';  //数据看板
import GeneralSettings from './GeneralSettings';  //通用设置

import Dashboard from './Dashboard';
import DataDictionary from './SystemSettings/DataDictionary'; //数据字典
import DataDictionaryDetail from './SystemSettings/DataDictionary/routers/Detail';

import RulesManage from './SystemSettings/RulesManage';


const routesConfig = app => [
    {
        path: '/sign',
        title: '登录',
        component: UserLayout,
        indexRoute: '/sign/login',
        childRoutes: []
    },
    {
        path: '/',
        title: '系统中心',
        component: BasicLayout,
        indexRoute: '/okr',
        childRoutes: [
          Blank(app),
          Test(app),


          OKR(app),
          UserWork(app),
          Viewboard(app),
          Databoard(app),

          GeneralSettings(app),

          Dashboard(app),
          DataDictionary(app),
          DataDictionaryDetail(app),

          RulesManage(app)
        ]
    }
];

export default app => createRoutes(app, routesConfig);
