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

    }

    doFecharNavegadorAndStopDriver(){

    }

    doLimpaCokiesSessionLocalstorage(){

    }

}

module.exports = BrowserOpcao