const express = require("express")
const router = express.Router()

router.get("/json",(req,res)=>{
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

router.get("/admin",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')

    res.json({msg:'user/admin'})
})

module.exports = router