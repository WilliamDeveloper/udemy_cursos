const BrowserBasico = require('./BrowserBasico')
const BrowserEvento = require('./BrowserEvento')
const BrowserElemento = require('./BrowserElemento')
const BrowserOpcao = require('./BrowserOpcao')
const BrowserMouse = require('./BrowserMouse')
const BrowserKeys = require('./BrowserKeys')
const BrowserIframe = require('./BrowserIframe')
const BrowserJavascript = require('./BrowserJavascript')
const BrowserScreenshot = require('./BrowserScreenshot')

const  Browser={
    constructor(pDriver=None){
        this.driver = pDriver
        this.init = BrowserBasico(this)
        this.evento = BrowserEvento(this)
        this.elemento = BrowserElemento(this)
        this.opcao = BrowserOpcao(this)
        this.mouse = BrowserMouse(this)
        this.keys = BrowserKeys(this)
        this.iframe = BrowserIframe(this)
        this.javascript = BrowserJavascript(this)
        this.screenshot = BrowserScreenshot(this)
    }
}

module.exports = Browser