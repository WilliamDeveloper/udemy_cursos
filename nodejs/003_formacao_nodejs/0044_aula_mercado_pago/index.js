const express = require('express')
const MercadoPago = require('mercadopago')
const app = express()

const mp_access_token = process.env['MB_ACCESS_TOKEN']
const mp_public_key = process.env['MP_PUBLIC_KEY']

MercadoPago.configure({
    sandbox:true,
    acces_token: access_token
})

app.listen(3000, (req,res)=>{
    console.log('rodando servidor')
})