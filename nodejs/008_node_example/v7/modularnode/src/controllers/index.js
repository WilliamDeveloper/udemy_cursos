const IndexController ={

    index(req, res, next){
        res.render('index', { title: 'blau Express', layout: 'default' });
    },

    home(req, res, next){
        let obj = {
            alertSuccess:'mensagem sucesso exemplo na tela home',
            alertError:'mensagem erro exemplo na tela home'
        }
        res.render('home', obj);
    }

}

module.exports = IndexController


