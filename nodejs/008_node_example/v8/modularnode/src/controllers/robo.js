const Browser = require('./../helpers/selenium/browser/Browser')


const RoboController = {

    async robo_acoes(req, res, next){
        let obj = {

        }
        res.render('robo-acoes', obj);
    },

    async abrir_browser_ff(req, res, next){

        try{
            const url ='http://www.google.com.br'
            let browser = new Browser()
            await browser.init.setDriverFirefox()
            await browser.opcao.doAcessarPagina(url)

            // browser
        }catch (e) {
            console.log(e)
        }

        let obj = {

        }
        res.render('robo-acoes', obj);
    },

    async abrir_browser_chrome(req, res, next){

        try{
            const url ='http://www.google.com.br'
            let browser = new Browser()
            await browser.init.setDriverChrome()
            await browser.opcao.doAcessarPagina(url)

            // browser
        }catch (e) {
            console.log(e)
        }

        let obj = {

        }
        res.render('robo-acoes', obj);
    },

    async fechar_browser(req, res, next){


        try{
            const url ='http://www.google.com.br'
            let browser = new Browser()
            await browser.opcao.doFecharNavegador()

            // browser
        }catch (e) {
            console.log(e)
        }

        let obj = {

        }
        res.render('robo-acoes', obj);
    }

}

module.exports = RoboController