const IndexController ={

    index(req, res, next){
        res.render('index', { title: 'blau Express', layout: 'default' });
    },

    home(req, res, next){
        let obj = {
            alertError:'mensagem erro exemplo na tela home',
            alertSuccess:'mensagem sucesso exemplo na tela home blau'
        }
        res.render('home', obj);
    }

}

module.exports = IndexController


