const express = require('express');
const app = express()

const CookieParser = require('cookie-parser');

const indexRoutes = require('./routes/index')
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/usuario')

//pasta de arquivos staticos
app.use(express.static('public'))

// funcao middleware ".use" , express.json do tipo built-in
app.use(express.json())

app.use(CookieParser())



//criando funcao de middleware personalizada
app.use((req,res,next)=>{
    console.log('executando midleware a nivel de aplicacao - logando sempre antes de cada rota')
    return next()
})



app.use('/',indexRoutes)
app.use('/admin',adminRoutes)
app.use('/usuarios',usuarioRoutes)

app.get('/provoca-erro',(req,res,next)=>{
    setImmediate(()=>{
        next( new Error('Temos um problema'))
    })
})


//tramento de erro sempre antes do listener
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).json({message: err.message})
})

//listener para para subir a aplicacao
app.listen(3000,()=>{
    console.log(`rodando em http://localhost:3000`)
})