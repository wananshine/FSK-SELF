import { dynamicWrapper, createRoute } from '@/utils/core';
import CycleSettings from './routers/CycleSettings';  //周期设置
import UpdateSettings from './routers/UpdateSettings';  //进度更新频率设置
import OrganizationSettings from './routers/OrganizationSettings';  //进度更新频率设置

const routesConfig = app => ({
  path: '/settings',
  title: '通用设置',
  component: dynamicWrapper(app, [import('./model')], () => import('./components')),
  childRoutes: [
    CycleSettings(app),
    UpdateSettings(app),
    OrganizationSettings(app)
  ]
});

export default app => createRoute(app, routesConfig);
