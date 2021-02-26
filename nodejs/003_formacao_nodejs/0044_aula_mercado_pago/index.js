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

app.get('/pagar',(req,res)=>{


    //pagamentos
    //id. codigo, pagador, status
    //1, 121212121,a@a.com.br, nao foi pago

    const id = ""+Date.now()
    const email = 'a@a.com.br'

    const dados = {
        items:[
            //uuid e data
            {   id: id,
                description: '1x notebook acer',
                quantity: 1,
                currency_id:'BRL',
                unit_price: parseFloat(8400)
            }
        ],
        payer:{
            email: email
        },
        external_reference: id

    }

    res.send({dados})

})


app.listen(3000, (req,res)=>{
    console.log('rodando servidor')
    console.log('mp_access_token ', mp_access_token)
    console.log('mp_public_key ', mp_public_key)
})