const NeDB = require('nedb')
const db = new NeDB({
    filename:'users.db',
    autoload:true
})

//habilita validacao expresss
const {check, expressValidator, body, validationResult} = require("express-validator")

module.exports = (app)=>{

    let route = app.route('/users')

    route.get((req,res)=>{

        //sort 1 crescente sort -1 descrescente
        db.find({}).sort({name:1}).exec( (error,users)=>{
            if(error){
                //auto importado pela config do consign
                app.utils.error.send(error, req,res)
            }else{
                res.status(200).json({users})
            }
        })

    })


    route.post((req,res)=>{

        console.log(req.body)

        req.assert('name','o nome e obrigatorio').notEmpty()
        req.assert('email','o email e obrigatorio').notEmpty().isEmail()

        let errors = req.validationErrors()

        if(errors) {
            //auto importado pela config do consign
            app.utils.error.send(errors, req, res)
            return res.json({msg:'NOK'})
        }

        db.insert(req.body,(error, user)=>{
            if(error){
                //auto importado pela config do consign
                app.utils.error.send(error, req,res)
            }else{
                res.status(200).json(user)
            }

        })

    })

    app.get('/users/:id',(req,res)=>{

        db.findOne({_id: req.params.id}).exec( (error,user)=>{
            if(error){
                //auto importado pela config do consign
                app.utils.error.send(error, req,res)
            }else{
                res.status(200).json({user})
            }
        })

    })

    app.put('/users/:id',(req,res)=>{

        //filter/dadosToUpdate/calbackerror
        db.update({_id: req.params.id}, req.body, (error)=>{
            if(error){
                //auto importado pela config do consign
                app.utils.error.send(error, req,res)
            }else{
                //fazendo merge dos objetos
                let resposta = Object.assign(req.params, req.body)
                res.status(200).json(resposta)
                // res.status(200).json({body: req.body, params: req.params})
            }
        })

    })

    app.delete('/users/:id',(req,res)=>{

        //filter/dadosToUpdate/calbackerror
        db.remove({_id: req.params.id}, {}, (error)=>{
            if(error){
                //auto importado pela config do consign
                app.utils.error.send(error, req,res)
            }else{

                res.status(200).json({id:req.params.id})
                // res.status(200).json({body: req.body, params: req.params})
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