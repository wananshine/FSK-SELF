const express = require('express');

const { list } = require('../controller/index')

//路由中间件
const router = express.Router();



router.get('/', (req, res, next)=>{
	res.send("hello");
})


router.get('/api/list', list);


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