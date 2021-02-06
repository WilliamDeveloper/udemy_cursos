let http_test = require('http');

http_test.createServer(function (requisicao, resposta) {
    resposta.end("<h4>bem vindo ao site!</h4><br> show de bola")
}).listen(8181);
console.log('meu servidor esta rodando')