import { createRoutes } from '../utils/core';

import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import Blank from './Blank';
import Test from './Test';


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
        indexRoute: '/data_source_manage',
        childRoutes: [
          Blank(app),
          Test(app)
        ]
    }
];
export default app => createRoutes(app, routesConfig);
