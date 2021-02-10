const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")

const User = require('./User')

router.get('/admin/users', (req, res)=>{
    User.findAll().then((users)=>{
        res.render('admin/users/index',{users:users})
    })
})

router.get('/admin/users/create', (req, res)=>{
    res.render('admin/users/create')
})

router.post('/users/create', async (req, res)=>{
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        where:{email:email}
    }).then(async (user) =>{

        if(user == undefined){
            let hash = await  bcrypt.hash(password, 10);

            User.create({
                email:email,
                password:hash
            }).then(()=>{
                res.redirect("/")
            }).catch(()=>{
                res.redirect("/")
            })
        }else{
            res.redirect("/admin/users/create")
        }

    })



    // res.json({email,password})
})

module.exports = router