const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.statusCode = 200;
    res.send('hello worlds');
});

app.listener(3000,()=>{
    console.log(`rodando em http://localhost:3000`)
})