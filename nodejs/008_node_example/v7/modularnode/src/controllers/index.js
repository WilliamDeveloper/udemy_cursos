const IndexController ={

    index(req, res, next){
        res.render('index', { title: 'blau Express', layout: 'default' });
    },

    home(req, res, next){
        res.render('home', { alertError:'oi' });
    }

}

module.exports = IndexController


