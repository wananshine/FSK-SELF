const path = require('path');
const express = require('express');
const app = express();

const indexRouter = require('./router/index');
const socket = require('./socket/index');


const port = 7788;


//parse application/json
app.use(express.json());

//parse application/x-www-form-urlcoded
app.use(express.urlencoded({ extended: false }));

//静态资源服务中间件(内置中间件)
app.use(express.static(__dirname + '/public'));


// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {//此处和官网配置不一样
    //debug: process.env.NODE_ENV !== 'production',
	
	// 是否开启对模板输出语句自动编码功能。为 false 则关闭编码输出功能
	// escape 可以防范 XSS 攻击
	escape: true,
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');


app.use('/', indexRouter);


app.listen(port, ()=>{
	console.log(`Project app listening at http://10.130.200.222:${port}`)
})