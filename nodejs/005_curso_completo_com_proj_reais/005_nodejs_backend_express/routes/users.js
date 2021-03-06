const express = require("express")
const router = express.Router()

router.get("/users/json",(req,res)=>{
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

module.exports = router