import { dynamicWrapper, createRoute } from '../../utils/core';

const routesConfig = (app:any) => ({
  path: '/blank',
  title: '空白页',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default (app:any) => createRoute(app, routesConfig);
