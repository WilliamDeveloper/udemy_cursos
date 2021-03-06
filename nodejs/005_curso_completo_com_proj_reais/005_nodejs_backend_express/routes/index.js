const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    res.end('<h1> ola</h1>')
})

module.exports = router