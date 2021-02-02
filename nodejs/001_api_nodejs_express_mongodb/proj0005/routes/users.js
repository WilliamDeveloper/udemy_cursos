const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const bcrypt = require('bcrypt');

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

//localhost:3000/users/create [Content-Type: application/json]
// {
//     "email": "will@will.com.br",
//     "password": "123456"
// }
router.post('/create', (req,res) => {
    let obj = req.body;
    console.log(obj);

    const {email, password} = obj;

    if(!email || !password) return res.send({error: 'dados insuficientes'});

    Users.findOne({email:email}, (err, data) => {
       if (err) return res.send({error: 'erro ao buscar usuario'});
       if (data) return res.send({error: 'usuario ja registrado'});

       Users.create({email:email, password:password}, (err, data)=>{
           if(err) return res.send({error: 'erro ao criar usuario!'});

           data.password = undefined;
           return res.send(data);

       });
    });
});

router.post('/auth', (req,res)=>{
    let obj = req.body;
    console.log(obj);

    const {email, password} = obj;

    if(!email || !password) return res.send({error: 'dados insuficientes'});


    Users.findOne({email:email}, (err, data) => {
        if (err) return res.send({error: 'erro ao buscar usuario'});
        if (!data) return res.send({error: 'usuario nao registrado'});

        bcrypt.compare(password,data.password, (err, same)=>{
            if (!same) return res.send({error: 'Error ao autenticar usuario!'});

            return res.send(data);
        });

    }).select('+password');

})


module.exports = router;