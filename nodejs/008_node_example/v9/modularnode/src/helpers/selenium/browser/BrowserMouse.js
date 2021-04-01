class  BrowserMouse {

    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    doMouseHoverPassarMousePorCimaDoElemento(pElemento){
        // self.browser.driver.execute_script("arguments[0].scrollIntoView();", pElemento)
        //
        // action = ActionChains(self.browser.driver)
        // action.move_to_element(pElemento)
        //
        // action.perform()

        // # self.browser.action_chains.move_to_element(pElemento).perform()
        // # action = ActionChains(self.browser.driver)
        // # action.move_to_element(pElemento)
        // # action.click()
        // # action.perform()
    }




}

module.exports = BrowserMouse