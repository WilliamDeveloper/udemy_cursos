const express = require('express')
const MercadoPago = require('mercadopago')
const app = express()

const mp_access_token = process.env['MP_ACCESS_TOKEN']
const mp_public_key = process.env['MP_PUBLIC_KEY']

MercadoPago.configure({
    sandbox:true,
    access_token: mp_access_token
})

app.get('/',(req,res)=>{
    res.send('ola mundo')
})

app.listen(3000, (req,res)=>{
    console.log('rodando servidor')
    console.log('mp_access_token ', mp_access_token)
    console.log('mp_public_key ', mp_public_key)
})