module.exports ={

    user: (app,req,res)=>{
        req.assert('_name','o nome e obrigatorio').notEmpty()
        req.assert('_email','o email e obrigatorio').notEmpty().isEmail()

        let errors = req.validationErrors()

        if(errors) {
            //auto importado pela config do consign
            app.utils.error.send(errors, req, res)
            return false
        }else{
            return true
        }
    }

}