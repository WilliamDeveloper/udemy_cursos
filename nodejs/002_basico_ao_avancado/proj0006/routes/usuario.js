const express = require('express');
const router = express.Router()

function logReq(req,res,next){
    console.log('excecutando middleware para a rota usuarios')
    next()
}

router.get('/',logReq, (req,res)=>{
    res.statusCode = 200;
    res.send('listando usuarios');
});

router.get('/:id', (req,res)=>{
    res.statusCode = 200;
    let id = req.params.id;
    res.send('area usuario.id '+ id);
});


// ultima linha SEMPRE EXPORTAR o router
module.exports = router;