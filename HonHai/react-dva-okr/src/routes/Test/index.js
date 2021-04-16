import { dynamicWrapper, createRoute } from '@/utils/core';


const routesConfig = app => ({
  path: '/test',
  title: '测试页',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
