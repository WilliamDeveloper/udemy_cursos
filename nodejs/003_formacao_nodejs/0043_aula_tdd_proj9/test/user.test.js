const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)

beforeAll(()=>{
    console.log("william pacheco")
    // inserir usuario
})


afterAll(()=>{
    console.log("william pacheco")
    //remover usuario
})

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

    test("Deve impedir que um usuario se cadastre com dados vazios",()=>{

        let user = {name:'', email: '', password: ''}

        return request
            .post("/user").send(user).then(res=>{
                let status = res.statusCode
                expect(status).toEqual(400)//bad request dados invalidos
            }).catch(error=>{
                fail(error)
            })
    })

    test("Deve impedir que um usuario se cadastre com um email repetido",()=>{

        let time = Date.now()
        let email = `${time}@gmail.com`
        let user = {name:'William', email: email, password: '123456'}

        return request
            .post("/user").send(user).then(res=>{
                let status = res.statusCode
                expect(status).toEqual(200)
                expect(res.body.email).toEqual(email)

                return request
                    .post("/user").send(user).then(res2=>{
                    let status = res2.statusCode
                    expect(status).toEqual(400)
                    expect(res2.body.error).toEqual('email ja cadastrado')
                }).catch(error=>{
                    fail(error)
                })

            }).catch(error=>{
                fail(error)
            })
    })


})
