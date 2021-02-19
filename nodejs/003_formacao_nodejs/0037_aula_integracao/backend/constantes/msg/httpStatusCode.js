const httpStatusCode ={

    //https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

    //1xx - Respostas informativas
    code_100:{ code:100, desc: '100 - continue'},
    code_101:{ code:101, desc: '101 - switching protocol'},
    code_102:{ code:102, desc: '102 - processing(webdav)'},
    code_103:{ code:103, desc: '103 - early hints'},

    //2xx - respostas de sucesso
    code_200:{ code:200, desc: '200 - OK - requisicao efetuada com sucesso'},
    code_201:{ code:201, desc: '201 - a requisicao POST criou o item com sucesso'},
    code_202:{ code:202, desc: '202 - accepted'},
    code_203:{ code:203, desc: '203 - non-authoritative information'},
    code_204:{ code:204, desc: '204 - no content'},
    code_205:{ code:205, desc: '205 - reset content'},
    code_206:{ code:206, desc: '206 - partial content'},
    code_207:{ code:207, desc: '207 - multi-status(webdav)'},
    code_208:{ code:208, desc: '208 - multi-status(webdav)'},
    code_226:{ code:226, desc: '226 - IM Used(http delta enconding)'},

    //3xx redirecionamento
    code_300:{ code:300, desc: '300 - multipla escolha'},
    code_301:{ code:301, desc: '301 - movido'},
    code_302:{ code:302, desc: '302 - encontrado'},
    code_303:{ code:303, desc: '303 - consulte outros'},
    code_304:{ code:304, desc: '304 - nao modificado'},
    code_305:{ code:305, desc: '305 - use proxy'},
    code_306:{ code:306, desc: '306 - proxy switch'},
    code_307:{ code:307, desc: '307 - redirecionamento temporario'},
    code_308:{ code:308, desc: '308 - redirecionamento permanente'},

    //4xx - erro de cliente
    code_400:{ code:400, desc: '400 - requisicao invalida'},
    code_401:{ code:401, desc: '401 - credenciais invalidas - nao autorizado'},
    code_402:{ code:402, desc: '402 - pagamento necessario'},
    code_403:{ code:403, desc: '403 - proibido'},
    code_404:{ code:404, desc: '404 - recurso nao encontrado'},
    code_405:{ code:405, desc: '405 - metodo nao permitido'},
    code_406:{ code:406, desc: '406 - not acceptable'},
    code_407:{ code:407, desc: '407 - proxy authentication required'},
    code_408:{ code:408, desc: '408 - request timeout'},
    code_409:{ code:409, desc: '409 - conflict'},
    code_410:{ code:410, desc: '410 - gone'},
    code_411:{ code:411, desc: '411 - length required'},
    code_412:{ code:412, desc: '412 - precondition failed'},
    code_413:{ code:413, desc: '413 - payload too large'},
    code_414:{ code:414, desc: '414 - uri too long' },
    code_415:{ code:415, desc: '415 - unsupported media type' },
    code_416:{ code:416, desc: '416 - request range not satisfiable' },
    code_417:{ code:417, desc: '417 - expection failed' },
    code_418:{ code:418, desc: '418 - im a teapot' },
    code_421:{ code:421, desc: '421 - misdirected request' },
    code_422:{ code:422, desc: '422 - unprocessable entity (webdav)' },
    code_423:{ code:423, desc: '423 - locked(webdav)' },
    code_424:{ code:424, desc: '424 - failed dependency(webdav)'},
    code_425:{ code:425, desc: '425 - tooearly'},
    code_426:{ code:426, desc: '426 - upgrade required' },
    code_428:{ code:428, desc: '428 - precondition required' },
    code_429:{ code:429, desc: '429 - too many requests' },
    code_431:{ code:431, desc: '431 - request reader fields too large'},
    code_451:{ code:451, desc: '451 - unavailable for legal reasons' },


    //5xx - erro de cliente
    code_500:{ code:500, desc: '500 - internal server error'},
    code_501:{ code:501, desc: '501 - not implemented' },
    code_502:{ code:502, desc: '502 - bad gateway' },
    code_503:{ code:503, desc: '503 - service unavailable' },
    code_504:{ code:504, desc: '504 - gateway timeout' },
    code_505:{ code:505, desc: '505 - http version not supported' },
    code_506:{ code:506, desc: '506 - variant also negotiates' },
    code_507:{ code:507, desc: '507 - insufiente storage' },
    code_508:{ code:508, desc: '508 - loop detected (webdav)' },
    code_510:{ code:510, desc: '510 - not extended'},
    code_511:{ code:511, desc: '511 - network authentication required' },


}

module.exports = httpStatusCode