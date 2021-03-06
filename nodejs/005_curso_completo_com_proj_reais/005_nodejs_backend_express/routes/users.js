module.exports = (app)=>{

    app.get("/users",(req,res)=>{
        res.statusCode = 200
        res.setHeader("Content-Type", 'application/json')
        let user = {
            nome:'william',
            idade:18,
            admin:true
        }
        // res.end(JSON.stringify(user))
        res.json(user)
    })


    app.post("/users",(req,res)=>{
        res.statusCode = 200
        res.setHeader("Content-Type", 'application/json')
        let user = {
            nome:'william',
            idade:18,
            admin:true
        }
        // res.end(JSON.stringify(user))
        res.json(user)
    })


    app.get("/users/json",(req,res)=>{
        res.statusCode = 200
        res.setHeader("Content-Type", 'application/json')
        let user = {
            nome:'william',
            idade:18,
            admin:true
        }
        // res.end(JSON.stringify(user))
        res.json(user)
    })

    app.get("/users/admin",(req,res)=>{
        res.statusCode = 200
        res.setHeader("Content-Type", 'application/json')

        res.json({msg:'user/admin'})
    })

}