const app = require('../src/app')
const supertest = require('supertest')

let request = supertest(app)

test("deve responder na porta 3131",()=>{
    return request.get('/').then(res => expect(res.statusCode).toEqual(200))
})

test("deve retornar vermelho como cor favorita do william",()=>{
    return request.get('/cor/william').then(res => expect(res.body.cor).toEqual('vermelho'))
})