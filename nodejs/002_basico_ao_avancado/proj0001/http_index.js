const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;
const url = `http://${hostname}:${port}/`

const server  = http.createServer((req,res) =>{
    res.statusCode = 200;
    // res.setHeader('Content-Type','text/plain'); //padrao
    res.setHeader('Content-Type','text/html');
    res.end("Olá mundo \n Meu primeiro Script");
});

server.listen(port, hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}`)
});
