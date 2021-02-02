const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const bcrypt = require('bcrypt');

// router.get('/', (req,res) => {
//     Users.find({},(err, data) => {
//         if (err)  return res.send({error:'Erro na consulta de usuarios!'});
//         return res.send(data);
//     })
// });

router.get('/', async (req,res) => {
    try{
        const users = await Users.find({})
        return res.send(data);
    }catch(err){
        return res.send({error:'Erro na consulta de usuarios!'});
    }
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
// router.post('/create', (req,res) => {
//     let obj = req.body;
//     console.log(obj);
//
//     const {email, password} = obj;
//
//     if(!email || !password) return res.send({error: 'dados insuficientes'});
//
//     Users.findOne({email:email}, (err, data) => {
//        if (err) return res.send({error: 'erro ao buscar usuario'});
//        if (data) return res.send({error: 'usuario ja registrado'});
//
//        Users.create({email:email, password:password}, (err, data)=>{
//            if(err) return res.send({error: 'erro ao criar usuario!'});
//
//            data.password = undefined;
//            return res.send(data);
//
//        });
//     });
// });

router.post('/create', async (req,res) => {
    let obj = req.body;
    console.log(obj);

    const {email, password} = obj;

    if(!email || !password) return res.send({error: 'dados insuficientes'});

    try{
        if (await Users.findOne({email:email})) return res.send({error: 'usuario ja registrado'});

        const user = await Users.create(obj);
        user.password = undefined;
        return res.send(user);

    }catch(err){
        return res.send({error:'erro ao buscar usuario'});
    }
});

// router.post('/auth', (req,res)=>{
//     let obj = req.body;
//     console.log(obj);
//
//     const {email, password} = obj;
//
//     if(!email || !password) return res.send({error: 'dados insuficientes'});
//
//
//     Users.findOne({email:email}, (err, data) => {
//         if (err) return res.send({error: 'erro ao buscar usuario'});
//         if (!data) return res.send({error: 'usuario nao registrado'});
//
//         bcrypt.compare(password,data.password, (err, same)=>{
//             if (!same) return res.send({error: 'Error ao autenticar usuario!'});
//
//             data.password = undefined;
//             return res.send(data);
//         });
//
//     }).select('+password');
// })

router.post('/auth', async (req,res)=>{
    let obj = req.body;
    console.log(obj);

    const {email, password} = obj;

    if(!email || !password) return res.send({error: 'dados insuficientes'});

    try{
        const user = await Users.findOne({email:email}).select('+password');

        if (!user) return res.send({error: 'usuario nao registrado'});

        const pass_ok = await bcrypt.compare(password,user.password);

        if(!pass_ok) return res.send({error: 'Error ao autenticar usuario!'});

        user.password = undefined;
        return res.send(user);

    }catch(err){
        return res.send({error:'erro ao buscar usuario'});
    }
});


module.exports = router;