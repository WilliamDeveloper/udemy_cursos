const express = require('express');
const router = express.Router();
const Users = require('../model/user');

router.get('/', (req,res) => {
    Users.find({},(err, data) => {
        if (err)  return res.send({error:'Erro na consulta de usuarios!'});
        return res.send(data);
    })

    let params = req.query;
    let respostaJson ={
        message: 'Tudo ok com o método GET da rota de usuarios!',
        params : params
    };
    return res.send(respostaJson)
});

router.post('/', (req,res) => {
    let params = req.query;
    return res.send({message: 'Tudo ok com o método POST da rota de usuarios!'})
});

router.get('/create', (req,res) => {
    let params = req.query;
    let respostaJson ={
        message: 'Tudo ok com o método GET da rota de usuarios/create!',
        params : params
    };
    return res.send(respostaJson)
});

module.exports = router;