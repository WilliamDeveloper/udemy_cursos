const express = require('express');
const app = express()

const CookieParser = require('cookie-parser');

const indexRoutes = require('./routes/index')
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/usuario')

// funcao middleware ".use" , express.json do tipo built-in
app.use(express.json())

app.use(CookieParser())



//criando funcao de middleware personalizada
app.use((req,res,next)=>{
    console.log('executando midleware a nivel de aplicacao - logando sempre antes de cada rota')
    return next()
})

app.get('/setcookie', (req,res)=>{
    // res.cookie('user','WilliaM', {maxAge: 600, httpOnly: false })
    // res.cookie("user", "william", {maxAge: 600, httpOnly: false } ); // da erro
    res.cookie("user", "william"); // da erro
    return res.send('cookie gravado com sucesso')
});


app.get('/getcookie', (req,res)=>{

    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)


    if(req.cookies.user !== "true") {
        response = "blau!";
    }

    res.send(response);
    // let user = req.cookies.user
    // if(user){
    //     res.send(user)
    // }else{
    //     res.send('a chave do cookie nao exist')
    // }

});

app.use('/',indexRoutes)
app.use('/admin',adminRoutes)
app.use('/usuarios',usuarioRoutes)




app.listen(3000,()=>{
    console.log(`rodando em http://localhost:3000`)
})