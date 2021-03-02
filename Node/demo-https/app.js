const http = require('http');
const https = require('https');
const port = 3355;

const server = http.createServer((resquest, response)=>{
	//response.setHeader("Content-Type", "application/json;charset=utf-8");
	https.get(`https://music.163.com/store/api/allProduct/gets?limit=60&offset=0`, (result)=>{
		let data = "";
		result.on('data', (chunk)=>{
			console.log("啦啦啦：",chunk);
			//process.stdout.write(chunk);
			data += chunk;
		})
		result.on('end', ()=>{
			response.writeHead(200, {
				'content-type': 'application/json;charset=utf-8'
			})
			response.write(data);
			response.end();
		})
	})
	
})

server.listen(port, ()=>{
	console.log(`http://10.130.200.222:${port}`)
})