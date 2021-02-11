const ejs = require('ejs')

class HtmlParser {

    static async Parse(table){
        return await ejs.renderFile("./uteis/table.ejs",{header : table.header})
    }

}

module.exports=HtmlParser