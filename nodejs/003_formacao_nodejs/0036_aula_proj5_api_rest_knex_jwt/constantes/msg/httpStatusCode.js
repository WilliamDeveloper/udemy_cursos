const httpStatusCode ={

    //https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

    //1xx - Respostas informativas
    code_100:'100 - continue',
    code_101:'101 - switching protocol',
    code_102:'102 - processing(webdav)',
    code_103:'103 - early hints',

    //2xx - respostas de sucesso
    code_200:'200 - OK - requisicao efetuada com sucesso',
    code_201:'201 - a requisicao POST criou o item com sucesso',
    code_202:'202 - accepted',
    code_203:'203 - non-authoritative information',
    code_204:'204 - no content',
    code_205:'205 - reset content',
    code_206:'206 - partial content',
    code_207:'207 - multi-status(webdav)',
    code_208:'208 - multi-status(webdav)',
    code_226:'226 - IM Used(http delta enconding)',

    //3xx redirecionamento
    code_300:'300 - multipla escolha',
    code_301:'301 - movido',
    code_302:'302 - encontrado',
    code_303:'303 - consulte outros',
    code_304:'304 - nao modificado',
    code_305:'305 - use proxy',
    code_306:'306 - proxy switch',
    code_307:'307 - redirecionamento temporario',
    code_308:'308 - redirecionamento permanente',

    //4xx - erro de cliente
    code_400:'400 - requisicao invalida',
    code_401:'401 - credenciais invalidas - nao autorizado',
    code_402:'402 - pagamento necessario',
    code_403:'403 - proibido',
    code_404:'404 - recurso nao encontrado',
    code_405:'405 - metodo nao permitido',
    code_406:'406 - not acceptable',
    code_407:'407 - proxy authentication required',
    code_408:'408 - request timeout',
    code_409:'409 - conflict',
    code_410:'410 - gone',
    code_411:'411 - length required',
    code_412:'412 - precondition failed',
    code_413:'413 - payload too large',
    code_414:'414 - uri too long',
    code_415:'415 - unsupported media type',
    code_416:'416 - request range not satisfiable',
    code_417:'417 - expection failed',
    code_418:'418 - im a teapot',
    code_421:'421 - misdirected request',
    code_422:'422 - unprocessable entity (webdav)',
    code_423:'423 - locked(webdav)',
    code_424:'424 - failed dependency(webdav)',
    code_425:'425 - tooearly',
    code_426:'426 - upgrade required',
    code_428:'428 - precondition required',
    code_429:'429 - too many requests',
    code_431:'431 - request reader fields too large',
    code_451:'451 - unavailable for legal reasons',

}

module.exports = httpStatusCode