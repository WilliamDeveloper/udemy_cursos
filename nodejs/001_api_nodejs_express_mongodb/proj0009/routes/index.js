const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', (req,res) => {
    let params = req.query;
    let respostaJson ={
        message: 'Tudo ok com o método GET da raiz!',
        params : params
    };
    return res.send(respostaJson)
});

router.post('/', (req,res) => {
    let params = req.query;
    return res.send({message: 'Tudo ok com o método POST da raiz!'})
});

module.exports = router;

