const template = require('art-template');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const sqlQuery = require('../postgreSql')


//应用中间件
const list = async (req, res, next)=>{
	
	// 查询
	let strSql = `select * from users`;
	let result = await sqlQuery(strSql);
	console.log(456,result);
	let html = template(path.join(__dirname, '../views/list.art'), {
		data: []
	});
	
	fs.writeFileSync(path.join(__dirname, '../public/list.html'), html);
	
	//res.render(html);
	res.send("pages has been compaile");
	
	//res.set('Content-Type',  'application/json; charset=utf-8');
	//res.render('list', {
	//	data: dataArray
	//});
}

const token = (req, res, next)=>{
	
	
	/*************************/
	//对称加密
	//const tk = jwt.sign({username: 'admin'}, 'kkk8888')
	
	//const decoded = jwt.verify(tk, 'kkk8888');
	
	//res.send(decoded);
	/*************************/
	
	
	/*************************/
	//非对称加密
	const privateKey = fs.readFileSync('../keys/rsa_private_key.pem');
	
	const tk = jwt.sign({username: 'admin'}, privateKey)
	
	const decoded = jwt.verify(tk, 'kkk8888');
	
	res.send(decoded);
	/*************************/
	
	
}


// 查询用户
const users = async (req, res, next)=>{
	
	// 查询语句
	let strSql = `select * from users`;
	let result = await sqlQuery(strSql);
	console.log(result);
	let resJson = JSON.stringify(result)
	res.send(result);

}

const plusUsers = async (req, res, next) => { 

	// 获取插入参数
	const data = req.body;

	// 插入语句
	let strSql = `insert into users(user_id, user_name, user_email, user_gender, user_birthday) 
 														values($1::bigint, $2::character, $3::character, $4::boolean, $5::date)`;
	let result = await sqlQuery(strSql, Object.values(data));
	// console.log(result);
	// let resJson = JSON.stringify(result)
	res.render('ok');

}

// 首页
const home = async (req, res, next)=>{
	
	let options = {
		title: '首页',
	};
	res.render('../views/home/index.art', options)

}





exports.list = list;
exports.token = token;
exports.users = users;
exports.plusUsers = plusUsers;
exports.home = home;