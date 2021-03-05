const template = require('art-template');
const path = require('path');
const fs = require('fs');

//应用中间件
const list = (req, res, next)=>{
	let dataArray = [123123123,12313123,1231312];
	
	let html = template(path.join(__dirname, '../views/list.art'), {
		data: dataArray
	});
	
	fs.writeFileSync(path.join(__dirname, '../public/list.html'), html);
	
	//res.render(html);
	res.send("pages has been compaile");
	
	//res.set('Content-Type',  'application/json; charset=utf-8');
	//res.render('list', {
	//	data: dataArray
	//});
}

exports.list = list;