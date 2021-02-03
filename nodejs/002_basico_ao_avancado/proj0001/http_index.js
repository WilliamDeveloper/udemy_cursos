const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;
const url = `http://${hostname}:${port}/`

const server  = http.createServer((req,res) =>{
    res.statusCode = 200;
    // res.setHeader('Content-Type','text/plain'); //padrao
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Olá mundo <br/> Meu primeiro Script </h1>");
});

server.listen(port, hostname, ()=>{
    console.log(`Servidor Rodando em http://${hostname}:${port}`);
});


const open = (
    process.platform == 'darwin' ? 'open' : process.platform == 'win32'? 'start': 'xdg-open'
);

const childProcess = require('child_process');
childProcess.exec(`${open} ${url}`);