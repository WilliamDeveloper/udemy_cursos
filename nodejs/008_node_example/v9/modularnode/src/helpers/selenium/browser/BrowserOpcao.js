class  BrowserOpcao {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
        console.log('browser', this.browser)
    }

    async doAcessarPagina(url){
        let driver = this.browser.driver
        driver.manage().window().maximize()
        await driver.get(url)

    }

    async doFecharNavegador(){
        let driver = this.browser.driver
        await driver.quit()
    }

    doFecharNavegadorAndStopDriver(){

    }

    doLimpaCokiesSessionLocalstorage(){

    }

}

module.exports = BrowserOpcao