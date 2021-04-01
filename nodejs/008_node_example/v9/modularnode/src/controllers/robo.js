const Browser = require('./../helpers/selenium/browser/Browser')
const  RoboBrowserController = require('./../controllers/robo/browser')




const RoboController = {

    async robo_acoes(req, res, next){
        let obj = {

        }
        res.render('robo-acoes', obj);
    },

    abrir_browser_chrome: RoboBrowserController.abrir_browser_chrome,
    abrir_browser_ff: RoboBrowserController.abrir_browser_ff,
    abrir_browser_ff: RoboBrowserController.fechar_browser,




}

module.exports = RoboController