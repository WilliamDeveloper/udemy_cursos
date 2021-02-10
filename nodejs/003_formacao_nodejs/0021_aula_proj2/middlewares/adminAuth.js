function adminAuth(req,res,next) {

    // como um middleware fica entre a requisicao e resposta
    // enquanto o middleware nao dar next a rota nao termina de responder
    if(req.session.user != undefined){
        next()
    }else{
        res.redirect("/login")
    }

}

module.exports=adminAuth