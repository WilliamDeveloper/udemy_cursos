const IndexController ={

    index(req, res, next){
        res.render('index', { title: 'blau Express', layout: 'default' });
    },

    home(req, res, next){
        res.render('home', {  });
    }

}

module.exports = IndexController


