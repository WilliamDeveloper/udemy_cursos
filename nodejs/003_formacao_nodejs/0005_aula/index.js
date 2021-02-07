const express  = require("express")
const app = express()

// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')

app.get("/:nome?/:lang?",(req,res)=>{
    let nome = req.params.nome || "William Pacheco"
    let lang = req.params.lang ||"javascript"
    let exibirMsg = true
    let params = {
        nome:nome,
        lang:lang,
        empresa : "guia programador",
        inscritos : 1500,
        msg : exibirMsg
    }
    res.render('index', params)// extensao nao obrigatoria
});

app.get("/home",(req,res)=>{
    // res.render('index.ejs')// extensao nao obrigatoria
    res.render('home')// extensao nao obrigatoria
});

app.get("/perfil",(req,res)=>{
    // res.render('index.ejs')// extensao nao obrigatoria
    res.render('principal/perfil')// extensao nao obrigatoria
});


app.listen(8181,()=>{
    console.log("servidor no ar")
})