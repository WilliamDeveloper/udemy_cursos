let http_test = require('http');

http_test.createServer(function (requisicao, resposta) {
    resposta.end("bem vindo ao site!")
}).listen(8181);
console.log('meu servidor esta rodando')