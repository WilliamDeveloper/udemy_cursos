const express = require('express');
const router = express.Router()

router.get('/', (req,res)=>{
    res.statusCode = 200;
    res.send('area administrativa');
});

router.get('/:id', (req,res)=>{
    res.statusCode = 200;
    let id = req.params.id;
    res.send('area administrativa '+ id);
});

router.post('/', (req,res)=>{

    const corpo = `
        Login: ${req.body.login}\n
        Senha: ${req.body.senha}
    `
    res.send('area administrativa via post\n'+corpo);
});

router.patch('/', (req,res)=>{
    res.send('area administrativa via PATCH\n');
});

router.put('/:id', (req,res)=>{
    res.send('area administrativa via PUT\n');
});


router.delete('/:id', (req,res)=>{
    res.send('area administrativa via DELETE\n');
});



// ultima linha SEMPRE EXPORTAR o router
module.exports = router;