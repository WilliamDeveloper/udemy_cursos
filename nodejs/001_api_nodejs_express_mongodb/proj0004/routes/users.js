const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
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