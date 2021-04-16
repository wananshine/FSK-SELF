import { dynamicWrapper, createRoute } from '@/utils/core';


const routesConfig = app => ({
  path: '/settings/update',
  title: '专案组织设置',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
