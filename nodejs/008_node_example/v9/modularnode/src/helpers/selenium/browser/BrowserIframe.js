class  BrowserIframe {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    doGoToIframeByElemento(pElemento){
        // self.browser.driver.switch_to.frame(pElemento)
    }

    doGoToIframeById(pElementoId){
        // self.browser.iframe.doGoToIframeDefault()
        // v_elemento = self.browser.elemento.getById(pElementoId)
        //
        // self.doGoToIframeByElemento(v_elemento)
    }



    doGoToIframeByName(pElementoName){
        // self.doGoToIframeByElemento(pElementoName)

    }


    doGoToIframeDefault(){
        // try:
        // self.browser.driver.switch_to.default_content()
        // except Exception as e:
        // print('erro: ',e)
    }

}






module.exports = BrowserIframe