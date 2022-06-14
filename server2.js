const http = require('http');
const file = require('fs');

/*
http.createServer((req,res)=>{
        const rstream = file.createReadStream('Node/NodeFile.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        rstream.pipe(res);
}).listen(8080);
*/

/*
http.createServer((req,res)=>{
        const rstream = file.createReadStream('Node/NodeFile.json');
        res.writeHead(200,{'Content-Type':'application/json'});
        rstream.pipe(res);
}).listen(8080);
*/

http.createServer((req,res)=>{
    const rstream = file.createReadStream('Node/soldier.jpg');
    res.writeHead(200,{'Content-Type':'image/jpg'});
    rstream.pipe(res);
}).listen(8080);
