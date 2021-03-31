
const RoboController = {

    robo_acoes(req, res, next){
        let obj = {

        }
        res.render('robo-acoes', obj);
    }

}

module.exports = RoboController