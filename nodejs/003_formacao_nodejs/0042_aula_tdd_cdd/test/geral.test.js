const supertest = require('supertest')

let request = supertest('www.google.com.br')

test("a aplicacao deve responder na porta 3131",()=>{
    return request.get('/')
        .then(res => expect(res.statusCode).toEqual(200))
})