const express = require('express');
const app = express()

const indexRoutes = require('./routes/index')
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/usuario')

// funcao middleware ".use" , express.json do tipo built-in
app.use(express.json())

//criando funcao de middleware personalizada
app.use((req,res,next)=>{
    console.log('executando midleware a nivel de aplicacao - logando sempre antes de cada rota')
    return next()
})

app.use('/',indexRoutes)
app.use('/admin',adminRoutes)
app.use('/usuarios',usuarioRoutes)




app.listen(3000,()=>{
    console.log(`rodando em http://localhost:3000`)
})