import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import './index.css';
import App from './App';
import Test from './routes/Test';
import reportWebVitals from './reportWebVitals';
import { Table, Popconfirm, Button } from 'antd';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// 创建应用
const app = dva();
// 注册视图
app.router(() => <Test />);
// 启动应用
app.start('#root');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
