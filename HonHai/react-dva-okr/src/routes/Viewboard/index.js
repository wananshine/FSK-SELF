import { connect, router } from 'dva';
import { dynamicWrapper, createRoute } from '@/utils/core';


const routesConfig = app => ({
  path: '/viewboard',
  title: '对齐视图',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
