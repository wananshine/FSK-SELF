import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/task_number',
  title: '任务次数',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
