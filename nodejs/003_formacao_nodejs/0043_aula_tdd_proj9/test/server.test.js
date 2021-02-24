const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)

test("deve responder na porta 3131",()=>{

    //sempre dar um retorno na frente de uma promise por causa do jest
    return request.get('/').then(res => {
        const status =res.statusCode
        expect(status).toEqual(200)
        expect(res.body.cor).toEqual('vermelho')
    })

})