// Setting http module 
/* var http = require('http');

// creating an HTTP Server that listen to server port and give response back to client
http.createServer(function(req,res) {
	res.writeHead(200,{'Content-type':'text/plain'}); //Sending response to client from HTTP server with status code & Obj
	res.write("Hello this is server created by deepesh");
	res.end();
}).listen('1337','127.0.0.1');

console.log('Webserver has started');
*/

var http = require('http'); // including http module
var fs   = require('fs');  // including file system module

// creating an HTTP Server that listen to server port and give response back to client
http.createServer(function(req,res) {
	fs.readFile('index.html', function(err,data) {
		res.writeHead(200,{'Content-type':'text/html'}); // Sending response to client from HTTP server with status code & Obj
		res.end(data);
	});
}).listen('1337','127.0.0.1');

console.log('Webserver has started');