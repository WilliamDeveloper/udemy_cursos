const Browser = require('./../helpers/selenium/browser/Browser')


const RoboController = {

    robo_acoes(req, res, next){
        let obj = {

        }
        res.render('robo-acoes', obj);
    },

    abrir_browser(req, res, next){


        let browser = new Browser()



        let obj = {

        }
        res.render('robo-acoes', obj);
    },

    fechar_browser(req, res, next){
        let obj = {

        }
        res.render('robo-acoes', obj);
    }

}

module.exports = RoboController