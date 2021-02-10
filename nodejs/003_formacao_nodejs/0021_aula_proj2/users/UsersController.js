const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")

const User = require('./User')

router.get('/admin/users', (req, res)=>{
    res.send('Listagem de usuarios')
})

router.get('/admin/users/create', (req, res)=>{
    res.render('admin/users/create')
})

router.post('/users/create', async (req, res)=>{
    let email = req.body.email;
    let password = req.body.password;


    let hash = await  bcrypt.hash(password, 10);

    User.create({
        email:email,
        password:hash
    }).then(()=>{
        res.redirect("/")
    }).catch(()=>{
        res.redirect("/")
    })
    // res.json({email,password})
})

module.exports = router