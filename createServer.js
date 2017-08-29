const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//create server
const server =  http.createServer((req,res) => {
	res.statusCode == 200;
	res.setHeader('Content-type', 'text/html');
    res.write(html)
	res.end('Nodejs created server')
})

server.listen(port, hostname, () =>{
	console.log('server started on port' +  port)
})

