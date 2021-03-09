const express = require('express');


//路由中间件
const router = express.Router();
const sqlQuery = require('../postgreSql')
const { list, token, users, plusUsers, home } = require('../controller')



router.get('/api/list', list);

router.get('/api/token', token);

router.get('/api/users', users);

router.post('/api/plusUsers', plusUsers);

router.get('/home', home);


//router.get('/', (req, res, next)=>{
//	res.send("hello");
//})


router.get('/index', (req, res, next)=>{
	const { id } = req.query;
	console.log(id)
	console.log(list.list);
	res.json(id);
	//res.send(id);
})

router.post('/index', (req, res, next)=>{
	const data = req.body;
	console.log(data)
	//res.json(data);
	res.send(data);
})

router.put('/index',(req, res, next)=>{
	const data = req.body;
	console.log(data)
	res.send('put');
})

router.delete('/index',(req, res, next)=>{
	const data = req.body;
	console.log(data)
	res.send('delete');
})

router.patch('/index',(req, res, next)=>{
	const data = req.body;
	console.log(data)
	res.send('patch');
})


module.exports = router;