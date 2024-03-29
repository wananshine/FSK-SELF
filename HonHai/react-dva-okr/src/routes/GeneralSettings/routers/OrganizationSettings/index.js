import { dynamicWrapper, createRoute } from '@/utils/core';


const routesConfig = app => ({
  path: '/settings/organization',
  title: '进度更新频率设置',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
