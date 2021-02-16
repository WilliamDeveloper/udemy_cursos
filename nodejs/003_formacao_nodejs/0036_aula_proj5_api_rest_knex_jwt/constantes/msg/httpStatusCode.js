const httpStatusCode ={

    //1xx

    //2xx
    200:'200 - requisicao efetuada com sucesso',

    //3xx redirecionamento
    300:'300 - multipla escolha',
    301:'301 - movido',
    302:'302 - encontrado',
    303:'303 - consulte outros',
    304:'304 - nao modificado',
    305:'305 - use proxy',
    306:'306 - proxy switch',
    307:'307 - redirecionamento temporario',
    308:'308 - redirecionamento permanente',



    //4xx - erro de cliente
    400:'400 - requisicao invalida',
    401:'401 - credenciais invalidas - nao autorizado',
    402:'402 - pagamento necessario',
    403:'403 - proibido',
    404:'404 - recurso nao encontrado',
    404:'405 - metodo nao permitido',
}

module.exports = httpStatusCode