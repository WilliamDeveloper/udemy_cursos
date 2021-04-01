// const Browser = require('./../helpers/selenium/browser/Browser')
const batScritpt = require('./../config/bat/batScritpt')
const fs = require('./../helpers/fs/fs')

const BatController = {

    async clear_ff_profile_temp(req, res, next){

        let comando_1 = batScritpt.DEL_ALL_FIREFOX_PROFILE_TMP_1
        let comando_2 = batScritpt.DEL_ALL_FIREFOX_PROFILE_TMP_2
        let comando_3 = batScritpt.DEL_ALL_FIREFOX_PROFILE_TMP_3




        await fs.ls();
        console.log('#')
        // await fs.cmdWithDir('ls', '%temp%')
        // process.chdir('%temp%')
        let dirAtual = await fs.dirAtual()
        console.log(dirAtual)
        console.log('#')
        await fs.ls();


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