const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.statusCode = 200;
    res.send('hello worlds');
});


app.get('/admin', (req,res)=>{
    res.statusCode = 200;
    res.send('area administrativa');
});

app.get('/admin/:id', (req,res)=>{
    res.statusCode = 200;
    let id = req.params.id;
    res.send('area administrativa '+ id);
});

app.listen(3000,()=>{
    console.log(`rodando em http://localhost:3000`)
})