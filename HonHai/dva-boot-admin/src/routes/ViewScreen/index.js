import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/sign/view_screen',
  title: '显示屏看板',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
