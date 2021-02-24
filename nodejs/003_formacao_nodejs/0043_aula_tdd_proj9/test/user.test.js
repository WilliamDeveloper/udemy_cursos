const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)


describe("Cadastro de usuario",()=>{

    test("Deve cadastrar um usuario com sucesso",()=>{
        let time = Date.now()
        let email = `${time}@gmail.com`
        let user = {name:'William', email: email, password: '123456'}

        return request
            .post("/user").send(user).then(res=>{
                let status = res.statusCode
                expect(status).toEqual(200)
                expect(res.body.email).toEqual(email)
            }).catch(error=>{
                fail(error)
            })
    })

})
