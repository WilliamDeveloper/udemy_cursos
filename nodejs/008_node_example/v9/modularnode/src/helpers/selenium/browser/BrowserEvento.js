class  BrowserEvento {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

//     def doPressionarEnterToElementoId(self,pElementoId):
//         self.browser.elemento.getById(pElementoId).send_keys(Keys.ENTER)
//
//
// # -----
//     def doClickBy(self,pLocatorTipo,pLocatorSentenca):
//         v_locator = (pLocatorTipo, pLocatorSentenca)
//
//     encontrou_elemento =  False
//     while not encontrou_elemento:
//     try:
//         encontrou_elemento = self.browser.wait.until(ec.element_to_be_clickable(v_locator))
//     self.browser.log.print('- ',encontrou_elemento)
//     except:
//         self.browser.log.print(f'erro-doClickBy: ( {pLocatorTipo}, {pLocatorSentenca})')
//     pass
//
//     # //para o click ganhar ter focus apos um reload de pagina
//     self.browser.elemento.getByTagName('body').click()
//     encontrou_elemento.click()
//
//
//
//     def doClickById(self, pElementoId):
//         self.doClickBy(By.ID,pElementoId)
//
//     def doRecuperarfocusDepoisDeUmLoadingRefresh(self):
//         self.browser.elemento.getByTagName('body').click()
//
//     def doClickOnButtonClassQueVemAposId(self,pElementoId,pElementoClass):
//         v_termo = f"//*[@id='{pElementoId}']/following::button[1][contains(@class,'{pElementoClass}')]"
//     self.browser.log.print('doClickOnButtonClassQueVemAposId - ',v_termo)
//     v_elemento = self.browser.elemento.getByXPath(v_termo)
//     v_elemento.click()
//
//     def doClickOnButtonQueVemAposId(self,pElementoId):
//         v_termo = f"//*[@id='{pElementoId}']/following::button[contains(@class,'btnX')]"
//     self.browser.log.print('doClickOnButtonClassQueVemAposId - ',v_termo)
//     v_elemento = self.browser.elemento.getByXPath(v_termo)
//     v_elemento.click()
//
//     def doEsperarLoadingByClass(self,pElementoClass):
//         v_termo = f"//*[@class='{pElementoClass}']"
//     self.browser.log.print(v_termo)
//     v_elemento = self.browser.wait.until(ec.invisibility_of_element_located((By.XPATH, v_termo)))
//     return v_elemento
//
//     def doEsperarLoadingByClassAndBackToIframeById(self,pElementoClass,pIframeId):
//         self.browser.iframe.doGoToIframeDefault()
//     self.browser.evento.doEsperarLoadingByClass(pElementoClass)
//     self.browser.iframe.doGoToIframeById(pIframeId)
}

module.exports = BrowserEvento