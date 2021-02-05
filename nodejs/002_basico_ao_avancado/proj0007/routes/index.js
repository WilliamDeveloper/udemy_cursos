const express = require('express');
const router = express.Router()


router.get('/', (req,res)=>{
    res.statusCode = 200;
    res.send('hello worlds');
});


// ultima linha SEMPRE EXPORTAR o router
module.exports = router;