import { dynamicWrapper, createRoute } from '@/utils/core';


const routesConfig = app => ({
  path: '/userwork',
  title: '个人工作台',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
