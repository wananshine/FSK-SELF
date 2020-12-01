import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/production_line_task',
  title: '产线任务类型对应',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
