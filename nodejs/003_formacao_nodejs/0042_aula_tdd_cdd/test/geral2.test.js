const app = require('../src/app')
const supertest = require('supertest')

let request = supertest(app)

test("deve responder na porta 3131",()=>{
    return request.get('/').then(res => expect(res.statusCode).toEqual(200))
})