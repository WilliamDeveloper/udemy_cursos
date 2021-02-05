const express = require('express');
const router = express.Router()

router.get('/', (req,res)=>{
    res.statusCode = 200;
    res.send('hello worlds');
});


router.get('/setcookie', (req,res)=>{
    // res.cookie('user','WilliaM', {maxAge: 600, httpOnly: false })
    // res.cookie("user", "william", {maxAge: 600, httpOnly: false } ); // da erro
    res.cookie("user", "william2"); // da erro
    return res.send('cookie gravado com sucesso')
});


router.get('/getcookie', (req,res)=>{

    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)


    if(req.cookies.user !== "true") {
        response = "blau!";
    }

    res.send(response);
    // let user = req.cookies.user
    // if(user){
    //     res.send(user)
    // }else{
    //     res.send('a chave do cookie nao exist')
    // }

});

// ultima linha SEMPRE EXPORTAR o router
module.exports = router;