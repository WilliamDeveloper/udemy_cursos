class  BrowserKeys {

    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    doPressionarESC(){
        // # self.browser.action_chains.send_keys(Keys.ESCAPE).perform()
        // ActionChains(self.browser.driver).send_keys(Keys.ESCAPE).perform()
        // # pElemento.send_keys(Keys.ESCAPE)
        //
        //
        // # pElemento.send_keys(Keys.ESCAPE)
        // # ActionChains(self.browser.driver).key_down(Keys.ESCAPE).key_up(Keys.ESCAPE).perform()
        // # Keys.ESCAPE
    }


    doPressionarTAB(){
        // ActionChains(self.browser.driver).send_keys(Keys.TAB).perform()
        // # .send_keys(Keys.TAB)
    }



}

module.exports = BrowserKeys