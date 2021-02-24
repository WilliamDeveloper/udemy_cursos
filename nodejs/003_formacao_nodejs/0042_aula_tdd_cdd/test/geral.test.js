const supertest = require('supertest')

let request = supertest('http://localhost:3131')

test("deve responder na porta 3131",()=>{
    return request.get('/').then(res => expect(res.statusCode).toEqual(200))
})