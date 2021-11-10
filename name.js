var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html'});
    res.end('Parvathy Balachandran');

}).listen(8080);