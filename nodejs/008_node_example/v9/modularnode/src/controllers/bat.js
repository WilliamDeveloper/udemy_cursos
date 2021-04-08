// const Browser = require('./../helpers/selenium/browser/Browser')
const batScritpt = require('./../config/bat/batScritpt')
const fs = require('./../helpers/fs/fs')

const BatController = {

    async clear_ff_profile_temp(req, res, next){

        let comando_1 = batScritpt.DEL_ALL_FIREFOX_PROFILE_TMP_1
        let comando_2 = batScritpt.DEL_ALL_FIREFOX_PROFILE_TMP_2
        let comando_3 = batScritpt.DEL_ALL_FIREFOX_PROFILE_TMP_3


        let dirCommand = fs.getDirTemp()
        await fs.cmdWithDir(comando_2, dirCommand)
        await fs.cmdWithDir(comando_2, dirCommand)

        let obj = {

        }
        res.render('home', obj);
    },

    async clear_temp(req, res, next){

        let temp = process.env['TEMP']
        if(temp.includes("AppData\\Local\\Temp")){
            let comando_1 = `rm -rf ${temp}/*.*`
            let comando_2 = `rm -rf ${temp}/*`
            let comando_3 = `rm -rf C:\\Windows\\Temp/*.*`
            let dirCommand = fs.getDirTemp()

            try{
                await fs.cmdWithDir(comando_1, dirCommand)
            }catch (e) {
                console.log(e)
            }

            try{
                await fs.cmdWithDir(comando_2, dirCommand)
            }catch (e) {
                console.log(e)
            }

            try{
                await fs.cmdWithDir(comando_3, dirCommand)
            }catch (e) {
                console.log(e)
            }


        }


        let obj = {

        }
        res.render('home', obj);
    },


}

module.exports = BatController