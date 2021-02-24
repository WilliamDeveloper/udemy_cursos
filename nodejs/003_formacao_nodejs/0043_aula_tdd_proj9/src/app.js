const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./models/User')

//bodyparser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//ir no cmd -> "mongo" -> "use guiapics"
mongoose.connect('mongodb://localhost:27017/guiapics', {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

const User = mongoose.model('User', user)

}).catch(error=>{
    console.log(error)
})

app.get('/',(req,res)=>{
    res.json({success:true,name:'william'})
})

app.post('/user',async (req,res)=>{
    try{
        let {name, email, password} = req.body
        let newUser = new User({name:name, email:email, password:password})
        await newUser.save()
        res.json({success:true,newUser, email:newUser.email})
    }catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})


module.exports = app