import React from 'react';
import dynamic, { router } from 'dva';
import $$ from 'cmn-utils';
import config from './config';
import App from './../App';
const { Route, Switch, Redirect } = router;



/**
 * 生成动态组件
 * @param {*} app
 * @param {*} models
 * @param {*} component
 */
export const dynamicWrapper = (app:any, models: any, component: any) => { 
    dynamic({
        app,
        models: () => models,
        component
    })
}


/**
 * 生成一组路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoutes = (app: any, routesConfig: any) => { }


/**
 * 生成单个路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoute = (app: any, routesConfig: any) => { 
    
}