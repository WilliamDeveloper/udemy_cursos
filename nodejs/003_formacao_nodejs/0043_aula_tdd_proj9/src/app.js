const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecrete = "senhasecreta"

//bodyparser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//ir no cmd -> "mongo" -> "use guiapics"
mongoose.connect('mongodb://localhost:27017/guiapics', {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
// colocar nada aqui
}).catch(error=>{
    console.log(error)
})

const User = mongoose.model('User', user)

app.get('/',(req,res)=>{
    res.json({success:true,name:'william'})
})

app.delete('/user/:email',async (req,res)=>{
    await User.deleteOne({email:req.params.email})
    res.sendStatus(200)
})

app.post('/user',async (req,res)=>{

    if(req.body.name == "" || req.body.email == "" || req.body.password == ""){
        res.sendStatus(400)
        return
    }

    let {name,email,password} = req.body



    try{
        let user = await User.findOne({email})
        console.log(user)

        if(user != undefined){
            res.status(400)
            res.json({error:'email ja cadastrado'})
            return
        }

        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(password,salt)




        let newUser = new User({name:name, email:email, password:hash})
        await newUser.save()
        res.json({success:true,newUser, email:newUser.email})
    }catch (e) {
        console.log(e)
        res.status(500)
        res.json({success:false,error:e})
    }
})

app.post("/auth",async (req,res)=>{
    const {email, password} = req.body

    let user = await User.findOne({email})

    if(user == undefined){
        res.statusCode = 403
        res.json({errors:{email:"email nao cadastrado"}})
        return
    }

    let isPasswordRight = await bcrypt.compare(password,user.password)

    if(!isPasswordRight){
        res.statusCode = 403
        res.json({errors:{password:"senha incorreta"}})
        return
    }

    jwt.sign({email, name: user.name, id: user._id},jwtSecrete,{expiresIn:'48h'},(error,token)=>{
        if(error){
            console.log(error)
            res.sendStatus(500)
        }else[
            res.json({token})
        ]
    })
})


module.exports = app