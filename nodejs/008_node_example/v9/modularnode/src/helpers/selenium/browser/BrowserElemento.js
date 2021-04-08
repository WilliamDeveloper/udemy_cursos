const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const By = webdriver.By

class  BrowserElemento {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    getClickableBy(pLocatorTipo,pLocatorSentenca,pRetry=True ){
        // v_elemento = False
        // v_locator = (pLocatorTipo, pLocatorSentenca)
        // encontrou_elemento =  False
        // while not encontrou_elemento:
        //     try:
        // self.browser.wait.until(ec.presence_of_element_located(v_locator))
        //
        // v_elemento =self.browser.wait.until(ec.element_to_be_clickable(v_locator))
        // print('1-v_elemento',v_elemento)
        // v_elemento = self.browser.driver.find_element(*v_locator)
        // print('2-v_elemento',v_elemento)
        // encontrou_elemento = True
        // except:
        //     pass
        //
        // if(not pRetry):
        // break
        //
        // return v_elemento
    }

    getBy(pLocatorTipo,pLocatorSentenca,pRetry=True ){
        // v_elemento = False
        // v_locator = (pLocatorTipo, pLocatorSentenca)
        // encontrou_elemento =  False
        // while not encontrou_elemento:
        //     try:
        // self.browser.wait.until(ec.presence_of_element_located(v_locator))
        // v_elemento = self.browser.driver.find_element(*v_locator)
        // encontrou_elemento = True
        // except:
        //     pass
        //
        // if(not pRetry):
        // break
        //
        // return v_elemento
    }

    getByClassName(pClassName){
        // return self.getBy(By.CLASS_NAME,pClassName)
    }

    getById(pElementoId){
        // return self.getBy(By.ID,pElementoId)
    }

    getByName(pElementoName){
        // return self.getBy(By.NAME,pElementoName)
    }

    getByLinkText(pLinkText){
        // return self.getBy(By.LINK_TEXT,pLinkText)
    }

    getByCssSelector(pCssSelector){
        // return self.getBy(By.CSS_SELECTOR, pCssSelector)
    }

    getByTagName(pTagName){
        // return self.getBy(By.TAG_NAME,pTagName)
    }


    getByXPath(pXPath,pRetry=True){
        // return self.getBy(By.XPATH,pXPath,pRetry)
    }

    getALinkByTextoExato(pTexto){
        // return self.getByXPath(f"//a[text()='{pTexto}']")
    }


    getClickableByXPath(pXPath,pRetry=True){
        // return self.getClickableBy(By.XPATH,pXPath,pRetry)
    }


    getClickableByTextoExato(pTexto){
        // v_elemento = False
        // v_termo_xpath = f"//*[text()='{pTexto}']"
        //
        // try:
        // v_elemento = self.getClickableByXPath(v_termo_xpath)
        // except:
        //     pass
        //
        // return v_elemento
    }


    getByTextoExato(pTexto){
        // v_elemento = False
        // v_termo_xpath = f"//*[text()='{pTexto}']"
        //
        // try:
        // v_elemento = self.getByXPath(v_termo_xpath)
        // except:
        //     pass
        //
        // return v_elemento
    }


// # .//input[@type='radio' and @value='F']
    getByRadioByValueExato(pTexto){
        // v_elemento = False
        // v_termo_xpath = f"//input[@type='radio' and @value='{pTexto}']"
        // v_elemento_locator = (By.XPATH, v_termo_xpath)
        //
        // encontrou_elemento =  False
        // while not encontrou_elemento:
        //     try:
        // self.browser.wait.until(ec.presence_of_element_located(v_elemento_locator))
        // v_elemento = self.getByXPath(v_termo_xpath)
        // encontrou_elemento =  True
        // except:
        //     pass
        // return v_elemento
    }


    getByInputButtonByValueExato(pTexto){
        // v_elemento = False
        // v_termo_xpath = f"//*[@type='button' and @value='{pTexto}']"
        // v_elemento_locator = (By.XPATH, v_termo_xpath)
        //
        // encontrou_elemento =  False
        // while not encontrou_elemento:
        //     try:
        // self.browser.wait.until(ec.presence_of_element_located(v_elemento_locator))
        // v_elemento = self.getByXPath(v_termo_xpath)
        // encontrou_elemento =  True
        // except:
        //     pass
        // return v_elemento
    }


    getByButtonWithSpanByValueExato(pTexto){
        // v_elemento = False
        // v_termo_xpath = f"//button[./span[text()='{pTexto}']]"
        // v_elemento_locator = (By.XPATH, v_termo_xpath)
        //
        // encontrou_elemento =  False
        // while not encontrou_elemento:
        //     try:
        // self.browser.wait.until(ec.presence_of_element_located(v_elemento_locator))
        // v_elemento = self.getByXPath(v_termo_xpath)
        // encontrou_elemento =  True
        // except:
        //     pass
        // return v_elemento
    }


    getByTextoParcial(pTexto){
        // v_elemento = False
        // try:
        // v_elemento = self.getByXPath(f"//*[contains(text(), '{pTexto}')]")
        // except:
        //     pass
        // return v_elemento
    }


    setValueById(pElementoId,pValue){
        // self.browser.log.print(f'#{pElementoId} {pValue}')
        // v_elemento = self.browser.elemento.getById(pElementoId)
        // v_elemento.send_keys(Keys.TAB)
        //
        // v_qtd_char_no_campo = len(v_elemento.get_attribute('value'))
        //
        // # self.browser.log.print('-',v_qtd_char_no_campo)
        // for _ in range(v_qtd_char_no_campo):
        // v_elemento.send_keys(Keys.BACKSPACE)
        //
        //
        // v_elemento.send_keys(pValue)
        // v_elemento.send_keys(Keys.TAB)
    }

    setValueByIdWithClear(pElementoId,pValue){
        // self.browser.log.print(f'#{pElementoId} {pValue}')
        // v_elemento = self.browser.elemento.getById(pElementoId)
        //
        // v_qtd_char_no_campo = len(v_elemento.get_attribute('value'))
        //
        // # self.browser.log.print('-',v_qtd_char_no_campo)
        // for _ in range(v_qtd_char_no_campo):
        // v_elemento.send_keys(Keys.BACKSPACE)
        //
        // v_elemento.send_keys(pValue)
        // v_elemento.send_keys(Keys.TAB)
    }


    setValueByIdWithHome(pElementoId,pValue){
        // self.browser.log.print(f'#{pElementoId} {pValue}')
        // self.browser.elemento.getById(pElementoId).send_keys(Keys.HOME, pValue)
    }


    setValueByIdSelectOption(pElementoId, pTextoOption){
        // self.browser.log.print(f'select-#{pElementoId} {pTextoOption}')
        // v_elemento = False
        //
        // v_termo = f"//select[@id='{pElementoId}']"
        // v_elemento = self.browser.elemento.getByXPath(v_termo)
        //
        // v_elemento_select = Select(v_elemento)
        // v_elemento_select.select_by_visible_text(pTextoOption)
        // self.browser.keys.doPressionarTAB()
    }


    setValueByIdMultipleSelectOption(pElementoId, pListaTextoOption){
        // self.browser.log.print(f'MultipleSelect-#{pElementoId} {pListaTextoOption}')
        //
        // # v_termo_button_open = f"//button[@class='ui-multiselect ui-widget ui-state-default ui-corner-all']//span[text()='{pTextoMultiselect}']"
        // v_termo_button_open = f"//*[@id='{pElementoId}']/following::button[1]/span[@class='ui-icon ui-icon-triangle-2-n-s']"
        // v_elemento_button_open = self.browser.elemento.getByXPath(v_termo_button_open)
        //
        // for textoOption in pListaTextoOption :
        // self.browser.log.print('textoOption=',textoOption)
        //
        // try:
        // v_elemento_button_open.click()
        //
        // v_termo_checkbox = f"//ul[@class='ui-multiselect-checkboxes ui-helper-reset']//li/label/input[@title='{textoOption}']"
        // v_elemento_checkbox = self.browser.elemento.getByXPath(v_termo_checkbox,pRetry=False)
        // v_elemento_checkbox.click()
        // except:
        //     self.browser.log.print(f'Erro: valor {textoOption} nao foi encontrado no multiselect')
        //
        // self.browser.evento.doRecuperarfocusDepoisDeUmLoadingRefresh()
    }



}

module.exports = BrowserElemento