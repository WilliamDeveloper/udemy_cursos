const htmlPdf = require('html-pdf')

class PDFWriter {

    static WritePDF(filepath, html, writePdfOptions=undefined){
        if(!writePdfOptions){
            writePdfOptions = {}
        }

        try{
            htmlPdf.create(html,writePdfOptions).toFile(filepath,(err)=>{})
            return true
        }catch (err) {
            return false
        }
    }
}

module.exports = PDFWriter