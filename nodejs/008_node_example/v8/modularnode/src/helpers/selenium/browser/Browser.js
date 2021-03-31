process.env['PATH'] =`${process.env['CHROME_NAVIGATOR_DRIVER_FOLDER']};${process.env['PATH']}`
process.env['PATH'] =`${process.env['CHROME_NAVIGATOR_FOLDER']};${process.env['PATH']}`

process.env['PATH'] =`${process.env['FIREFOX_NAVIGATOR_DRIVER_FOLDER']};${process.env['PATH']}`
process.env['PATH'] =`${process.env['FIREFOX_V66_0_5_NAVIGATOR_FOLDER']};${process.env['PATH']}`

process.env['FIREFOX_BIN']=`${process.env['FIREFOX_V66_0_5_NAVIGATOR_BIN']}`


const BrowserBasico = require('./BrowserBasico')
const BrowserEvento = require('./BrowserEvento')
const BrowserElemento = require('./BrowserElemento')
const BrowserOpcao = require('./BrowserOpcao')
const BrowserMouse = require('./BrowserMouse')
const BrowserKeys = require('./BrowserKeys')
const BrowserIframe = require('./BrowserIframe')
const BrowserJavascript = require('./BrowserJavascript')
const BrowserScreenshot = require('./BrowserScreenshot')

class  Browser {

    constructor(pDriver=''){
        if (!Browser._instance) {
            Browser._instance = this;

            this.driver = pDriver
            this.init = new BrowserBasico(this)
            this.evento = new BrowserEvento(this)
            this.elemento = new BrowserElemento(this)
            this.opcao = new BrowserOpcao(this)
            this.mouse = new BrowserMouse(this)
            this.keys = new BrowserKeys(this)
            this.iframe = new BrowserIframe(this)
            this.javascript = new BrowserJavascript(this)
            this.screenshot = new BrowserScreenshot(this)

            console.log('new')


        }


        return Browser._instance;
    }

    static getInstance() {
        return this._instance;
    }

}

module.exports = Browser