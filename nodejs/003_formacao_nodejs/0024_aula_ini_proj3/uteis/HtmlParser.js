const ejs = require('ejs')

class HtmlParser {

    async static Parse(table){
        return await ejs.renderFile("./table.ejs",{header : table.header})
    }

}

module.exports=HtmlParser