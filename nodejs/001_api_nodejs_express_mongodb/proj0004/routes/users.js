const express = require('express');
const router = express.Router();
const Users = require('../model/user');

router.get('/', (req,res) => {
    Users.find({},(err, data) => {
        if (err)  return res.send({error:'Erro na consulta de usuarios!'});
        return res.send(data);
    })
});

router.post('/', (req,res) => {
    let params = req.query;
    return res.send({message: 'Tudo ok com o método POST da rota de usuarios!'})
});

router.post('/create', (req,res) => {
    let params = req.body;
    const {email, password} = params;

    if(!email || !password) return res.send({error: 'dados insuficientes'});

    Users.findOne({email:email}, (err, data) => {
       if (err) return res.send({error: 'erro ao buscar usuario'});
       if (data) return res.send({error: 'usuario ja registrado'});

       Users.create({email:email, password:password}, (err, data)=>{
           if(err) return res.send({error: 'erro ao criar usuario!'});
           return res.send(data);

       });
    });
});

module.exports = router;