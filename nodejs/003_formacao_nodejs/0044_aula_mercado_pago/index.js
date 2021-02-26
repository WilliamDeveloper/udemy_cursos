const express = require('express')
const MercadoPago = require('mercadopago')
const app = express()

MercadoPago.configure({
    sandbox:true,
    acces_token: 'Test'
})

app.listen(3000, (req,res)=>{
    console.log('rodando servidor')
})