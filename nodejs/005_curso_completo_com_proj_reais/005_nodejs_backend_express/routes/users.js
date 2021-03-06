const NeDB = require('nedb')
const db = new NeDB({
    filename:'users.db',
    autoload:true
})

module.exports = (app)=>{

    app.get("/users",(req,res)=>{

        db.find({}).sort({name:1}).exec( (error,users)=>{
            if(error){
                //auto importado pela config do consign
                app.utils.error.send(error, req,res)
            }else{
                res.status(200).json({users})
            }
        })

    })


    app.post("/users",(req,res)=>{

        console.log(req.body)
        db.insert(req.body,(error, user)=>{
            if(error){
                //auto importado pela config do consign
                app.utils.error.send(error, req,res)
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