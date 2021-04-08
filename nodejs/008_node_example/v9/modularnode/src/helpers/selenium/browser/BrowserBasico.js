const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const By = webdriver.By

class  BrowserBasico {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    async setDriver(pDriver){
        console.log('setDriver')
        if(this.browser.driver){
            await this.browser.opcao.doFecharNavegador()
        }
        this.browser.driver = pDriver
    }

    async setDriverChrome(){
        let driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build()
        await this.setDriver(driver)
    }

    async setDriverFirefox(firefoxVersion=36){

        let driver = new webdriver.Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(new firefox.Options().setBinary(process.env.FIREFOX_V66_0_5_NAVIGATOR_BIN))
            .build();
        await this.setDriver(driver)
    }
}

module.exports = BrowserBasico