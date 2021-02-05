const express = require('express');
const app = express()

// funcao middleware ".use"
app.use(express.json())

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

app.post('/admin', (req,res)=>{

    const corpo = `
        Login: ${req.body.login}\n
        Senha: ${req.body.senha}
    `
    res.send('area administrativa via post\n'+corpo);
});

app.patch('/admin', (req,res)=>{
    res.send('area administrativa via PATCH\n');
});

app.put('/admin/:id', (req,res)=>{
    res.send('area administrativa via PUT\n');
});


app.delete('/admin/:id', (req,res)=>{
    res.send('area administrativa via DELETE\n');
});


app.listen(3000,()=>{
    console.log(`rodando em http://localhost:3000`)
})