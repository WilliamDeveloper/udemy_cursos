class  BrowserIframe {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }
}



// def __init__(self,pInstanciaBrowser):
// self.browser = pInstanciaBrowser
//
// def doGoToIframeByElemento(self,pElemento):
// self.browser.driver.switch_to.frame(pElemento)
//
// def doGoToIframeById(self,pElementoId):
// self.browser.iframe.doGoToIframeDefault()
// v_elemento = self.browser.elemento.getById(pElementoId)
//
// self.doGoToIframeByElemento(v_elemento)
//
//
// def doGoToIframeByName(self,pElementoName):
// self.doGoToIframeByElemento(pElementoName)
//
//
// def doGoToIframeDefault(self):
// try:
// self.browser.driver.switch_to.default_content()
// except Exception as e:
// print('erro: ',e)

module.exports = BrowserIframe