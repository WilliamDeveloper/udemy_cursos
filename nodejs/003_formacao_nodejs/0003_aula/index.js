const express  = require("express")
const app = express()

// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    // res.render('index.ejs')// extensao nao obrigatoria
    res.render('index')// extensao nao obrigatoria
});

app.get("/home",(req,res)=>{
    // res.render('index.ejs')// extensao nao obrigatoria
    res.render('home')// extensao nao obrigatoria
});


app.listen(8181,()=>{
    console.log("servidor no ar")
})