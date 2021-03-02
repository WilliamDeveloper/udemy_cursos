const express = require('express')
const router = express.Router()
const Job = require("../models/Job")

//
router.post('/add',(req,res)=>{
    let {title,salary,company,description,email,new_job} = req.body

    Job.create({
        title,salary,company,description,email,new_job
    }).then(res=>{console.log('criado')})
     .catch(error=>{ console.log('error',error)})
})