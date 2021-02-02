const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');

//funcoes auxiliares
const createUserToken = (userId) =>{
    return jwt.sign( {id:userId }, 'batatafrita2019', { expiresIn: '7d' });
};

// essa url so vai devolver os dados que o token valido mandado junto na requisicao
//localhost:3000/users/info_privada
router.get('/info_privada', auth, (req,res) => {
    try{
        console.log(res.locals.auth_data)
        const users = {nome:'william', idade:18};
        return res.send(users);
    }catch(err){
        return res.status(500).send({error:'Erro na consulta de usuarios!'});
    }
});


router.get('/', async (req,res) => {
    try{
        const users = await Users.find({})
        return res.send(data);
    }catch(err){
        return res.status(500).send({error:'Erro na consulta de usuarios!'});
    }
});



router.post('/', (req,res) => {
    let params = req.query;
    return res.send({message: 'Tudo ok com o método POST da rota de usuarios!'})
});



router.post('/create', async (req,res) => {
    let obj = req.body;
    console.log(obj);

    const {email, password} = obj;

    if(!email || !password) return res.send({error: 'dados insuficientes'});

    try{
        if (await Users.findOne({email:email})) return res.send({error: 'usuario ja registrado'});

        const user = await Users.create(obj);
        user.password = undefined;

        return res.status(201).send({ user, token: createUserToken(user.id) });

    }catch(err){
        return res.status(500).send({error:'erro ao buscar usuario'});
    }
});

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
        return res.send({ user, token: createUserToken(user.id) });

    }catch(err){
        return res.status(500).send({error:'erro ao buscar usuario'});
    }
});


module.exports = router;