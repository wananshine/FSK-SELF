import { dynamicWrapper, createRoute } from '@/utils/core';


const routesConfig = app => ({
  path: '/settings/cycle',
  title: '周期设置',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
