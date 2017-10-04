'use strict';


var http = require("http");

var server = http.createServer(function(request, response){

    console.log(request.method + ': ' + request.url);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('heeel农大  jioad ')
})

server.listen(8888);
console.log('Sverer running at http://127.0.0.1:8888/');
