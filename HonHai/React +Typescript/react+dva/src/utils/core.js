import React from 'react';
import dva from 'dva';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';
import $$ from 'cmn-utils';
import config from '../config';


/**
 * 生成动态组件
 * @param {*} app
 * @param {*} models
 * @param {*} component
 */
export const dynamicWrapper = (app, models, component) =>{
  return dynamic({
    app,
    models: () => models,
    component
  });
}


/**
 * 生成一组路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoutes = (app, routesConfig) => {
  const routes = routesConfig(app)
    .map(config => createRoute(app, () => config))
    .reduce((p, n) => {
      if (n.length) {
        return [...p, ...n];
      } else {
        return p.concat(n);
      }
    }, []);

    routesConfig(app).map(config =>{
      console.log('1-3', config)
      return createRoute(app, () => config)
    })

      console.log('1-4', routes)
  return <Switch>{routes}</Switch>;
};


/**
 * 生成单个路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoute = (app, routesConfig) => {
  const {
    component: Comp,
    path,
    indexRoute,
    title,
    exact,
    ...otherProps
  } = routesConfig(app);

  const routeProps = {
    key: path || $$.randomStr(4),
    render: props => {
      // 此处可以做路由权限判断
      setDocumentTitle(title);
      return <Comp routerData={otherProps} {...props} />
    }
  };

  return <Route path={path} {...routeProps} />;
};



/**
 * 设置页面title
 * @param {*} title
 */
function setDocumentTitle(title) {
  const documentTitle = config.htmlTitle ? config.htmlTitle.replace(/{.*}/gi, title) : title
  if (documentTitle !== document.title) {
    document.title = documentTitle;
  }
}
