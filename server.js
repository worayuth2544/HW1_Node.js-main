var http = require('http');
http.createServer(function (req, res) {
    let date = new Date();
    console.log(date.toString());
    console.log(date.toLocaleString());
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Chainarong Mundee ' +  date);
}).listen(2337);


