const express = require('express');
const router = express.Router()
const Category = require('./Category')
const slugfy = require('slugify')

router.get('/categories',(req, res)=>{
    res.send('rota categorias')
})

router.get('/admin/categories/new',(req,res)=>{
    res.render('admin/categories/new')
})

router.post("/categories/save",(req,res)=>{
    let title = req.body.title;
    if(title!=undefined){
        Category.create({
            title:title,
            slug: slugfy(title)
        }).then(()=>{
            res.redirect("/")
        })
    }else{
        res.redirect('/admin/categories/new')
    }
})

module.exports = router