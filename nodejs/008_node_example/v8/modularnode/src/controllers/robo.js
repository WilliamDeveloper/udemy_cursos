const Browser = require('./../helpers/selenium/browser/Browser')


const RoboController = {

    robo_acoes(req, res, next){
        let obj = {

        }
        res.render('robo-acoes', obj);
    },

    abrir_browser(req, res, next){

        try{
            const url ='http://www.google.com.br'
            let browser = new Browser()
            browser.init.setDriverFirefox()
            browser.opcao.doAcessarPagina(url)

            // browser
        }catch (e) {
            console.log(e)
        }

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