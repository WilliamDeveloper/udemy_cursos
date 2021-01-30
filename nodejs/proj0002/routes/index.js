const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    let params = req.query;
    let respostaJson ={
        message: 'Tudo ok com o método GET!',
        params : params
    };
    return res.send(respostaJson)
});

router.post('/', (req,res) => {
    let params = req.query;
    return res.send({message: 'Tudo ok com o método POST!'})
});

module.exports = router;

