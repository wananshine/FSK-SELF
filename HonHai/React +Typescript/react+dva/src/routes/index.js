import { createRoutes } from '../utils/core';

import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';

import Blank from './Blank';

import Test from './Test';

import Dashboard from './Dashboard';

import DataDictionary from './SystemSettings/DataDictionary';
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
        indexRoute: '/home',
        childRoutes: [
          Blank(app),
          Test(app),
          Dashboard(app),

          DataDictionary(app),
          DataDictionaryDetail(app),

          RulesManage(app)
        ]
    }
];

export default app => createRoutes(app, routesConfig);
