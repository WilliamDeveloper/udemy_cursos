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

app.get('/pagar', async (req,res)=>{


    //pagamentos
    //id. codigo, pagador, status
    //1, 121212121,a@a.com.br, nao foi pago

    const id = ""+Date.now()
    const email = 'a@a.com.br'

    const dados = {
        items:[
            //uuid e data
            {   id: id,
                title: '1x notebook acer',
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



    try{
        let pagamento = await MercadoPago.preferences.create(dados)
        console.log({pagamento, dados})
        //salvar dados do pagamento pendente para o banco
        return res.redirect(pagamento.body.init_point)
    }catch (e) {
        console.log(e)
        return res.send({error:e})
    }






})

app.get('/not',(req,res)=>{
    let dados = {query:req.query}
    console.log(dados)
    res.send(dados)
})


app.post('/not',(req,res)=>{
    let dados = {query:req.query}
    console.log(dados)

    let id = req.query.id

    setTimeout(()=>{

        let filtro ={
            "order.id": id
        }

        MercadoPago.payment.search({
            qs:filtro
        }).then(data=>{
            console.log(data)
        }).catch(error=>{
            console.log(error)
        })

    })


    res.send('OK')
})


app.listen(3000, (req,res)=>{
    console.log('rodando servidor')
    console.log('mp_access_token ', mp_access_token)
    console.log('mp_public_key ', mp_public_key)
})