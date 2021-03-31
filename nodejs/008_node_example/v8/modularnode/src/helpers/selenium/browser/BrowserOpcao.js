class  BrowserOpcao {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
        console.log('browser', this.browser)
    }

    doAcessarPagina(url){
        let driver = this.browser.driver
        driver.manage().window().maximize()
        driver.get(url)

    }

    doFecharNavegador(){
        let driver = this.browser.driver
        driver.quit()
    }

    doFecharNavegadorAndStopDriver(){

    }

    doLimpaCokiesSessionLocalstorage(){

    }

}

module.exports = BrowserOpcao