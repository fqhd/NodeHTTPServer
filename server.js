const http = require("http");

function requestListener(req, res){
	res.writeHead(200);
	res.end("<h1> Hello, sexy <h1>");
}

const server = http.createServer(requestListener);
server.listen(4000);