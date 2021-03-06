const NeDB = require('nedb')
const db = new NeDB({
    filename:'users.db',
    autoload:true
})

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

        db.insert(req.body,(error, user)=>{
            if(error){
                console.log(error)
                res.status(400).json({
                    error:error
                })
            }else{
                res.status(200).json(user)
            }

        })

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