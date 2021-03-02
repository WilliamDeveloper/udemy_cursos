const express = require('express')
const router = express.Router()
const Job = require("../models/Job")

//

router.get('/',(req,res)=>{
    res.send('ok')
})

router.get('/add',(req,res)=>{
    res.render('add')
})

router.post('/add',async (req,res)=>{
    let {title,salary,company,description,email,new_job} = req.body

    return Job.create({
        title,salary,company,description,email,new_job
    }).then(resp=>{
        console.log('criado')
        res.send('ok')
    }).catch(error=>{
         console.log('error',error)
         res.send('nok')
     })


})

module.exports = router