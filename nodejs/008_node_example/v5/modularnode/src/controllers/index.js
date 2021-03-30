const IndexController ={

    index(req, res, next){
        res.render('index', { title: 'blau Express', layout: 'default' });
    }

}

module.exports = IndexController


