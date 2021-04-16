import { dynamicWrapper, createRoute } from '@/utils/core';


const routesConfig = app => ({
  path: '/databoard',
  title: '数据看板',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
