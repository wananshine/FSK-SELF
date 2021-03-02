const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
	//res.setHeader("Content-Type", "application/json;charset=utf-8");
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	if(req.url === "/star/node"){
		fs.readFile('./public/01.html', (err, data) => {
		  if (err) throw err;
		  console.log(data);
		  res.end(data);
		});
	}else{
		res.end("无法显示页面");	
	}
	
})
server.listen(3520)