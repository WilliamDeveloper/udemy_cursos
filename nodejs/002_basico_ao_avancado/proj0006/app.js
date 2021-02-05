const express = require('express');
const app = express()

const indexRoutes = require('./routes/index')
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/admin')

// funcao middleware ".use"
app.use(express.json())

app.use('/',indexRoutes)
app.use('/admin',adminRoutes)
app.use('/admin',usuarioRoutes)




app.listen(3000,()=>{
    console.log(`rodando em http://localhost:3000`)
})