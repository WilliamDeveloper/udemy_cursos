const IndexController ={

    index(req, res, next){
        let obj = {
            alertError:'mensagem erro exemplo na tela home',
            alertSuccess:'mensagem sucesso exemplo na tela home blau',
            title: 'blau Express',
            layout: 'default'
        }
        res.render('index', obj);
    },

    home(req, res, next){
        let obj = {

        }
        res.render('home', obj);
    },

    testes_sistemas(req, res, next){
        let obj = {

        }
        res.render('testes-sistemas', obj);
    }

}

module.exports = IndexController


