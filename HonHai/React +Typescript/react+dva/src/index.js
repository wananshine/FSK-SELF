import React from 'react';
import ReactDOM from 'react-dom';
import dva, { dynamic } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import createLoading from 'dva-loading';
import { createHashHistory } from 'history';
import { homepage } from '../package.json';
import createRoutes from './routes';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import reportWebVitals from './reportWebVitals';



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// 创建应用
const app = dva({
  history: createHashHistory({
    basename: '/' //homepage.startsWith('/') ? homepage : ''
  })
});

// 使用mock数据
require('./_mocks_');

// -> 注册局部模型
// app.model(require('./routes/Test/model').default);
// -> 注册全局模型
app.model(require('./models/global').default);


// 初始化路由, 注册视图
// app.router(require('./routes'));
// app.router(() => <App />);
app.router(({ history, app }) => (
  <ConfigProvider locale={zh_CN}>
    <Router history={history}>{createRoutes(app)}</Router>
  </ConfigProvider>
));

// 启动应用
app.start('#root');

// export global
export default {
  app,
  store: app._store,
  dispatch: app._store.dispatch
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
