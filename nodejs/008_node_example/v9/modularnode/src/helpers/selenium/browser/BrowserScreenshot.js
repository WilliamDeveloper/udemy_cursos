class  BrowserScreenshot {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    doTirarScreenshotDoBodyEstandoEmIframeById(pIframeId){
        // self.browser.iframe.doGoToIframeDefault()
        // self.doTirarScreenshotDoBody()
        // self.browser.iframe.doGoToIframeById(pIframeId)
    }


    doTirarScreenshotDoBody(pPastaPadraoScreenShoot=_const.selenium.pasta_padrao_screenshot){
        // if(self.is_habilitado):
        // v_elemento = self.browser.elemento.getByTagName('body')
        // v_elemento.screenshot( pPastaPadraoScreenShoot + f'print{time.time()}.png')
    }


    doTirarScreenshotFromElemento(pElemento, pPastaPadraoScreenShoot=_const.selenium.pasta_padrao_screenshot){
        // if(self.is_habilitado):
        // pElemento.screenshot( pPastaPadraoScreenShoot + f'print{time.time()}.png')
    }




}

module.exports = BrowserScreenshot