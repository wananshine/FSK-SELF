// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import dva, { router } from 'dva';  // { dynamic }
import { createHashHistory } from 'history';
import { homepage } from '../package.json';
import reportWebVitals from './reportWebVitals';


// let app: any;
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
//   () => {}
// );


// -> 初始化
const app:any = dva({
  history: createHashHistory({
    basename: homepage.startsWith('/') ? homepage : ''
  })
});

// app.router( require('./router').default );
app.router( require('./views').default );
    
app.start('#root');
    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
