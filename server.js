const http= require('http');

/*
const hello= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hello there, You accessing me");
    res.end();
}).listen(8080);
*/

const hello= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Hello, you called me from root domain');
        res.end();
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Hello there, You accessing me from another domain.");
        res.end();
    }
    }).listen(8080);