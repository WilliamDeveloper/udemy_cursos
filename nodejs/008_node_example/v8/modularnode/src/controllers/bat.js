// const Browser = require('./../helpers/selenium/browser/Browser')


const BatController = {

    async clear_ff_profile_temp(req, res, next){
        let obj = {

        }
        res.render('home', obj);
    },

    async clear_temp(req, res, next){



        let obj = {

        }
        res.render('home', obj);
    },


}

module.exports = BatController