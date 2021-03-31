process.env['PATH'] =`${process.env['CHROME_NAVIGATOR_DRIVER_FOLDER']};${process.env['PATH']}`
process.env['PATH'] =`${process.env['CHROME_NAVIGATOR_FOLDER']};${process.env['PATH']}`

console.log('# ', process.env['CHROME_NAVIGATOR_DRIVER_FOLDER'])
console.log('path=> ', process.env['PATH'])

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
    }
}

module.exports = Browser