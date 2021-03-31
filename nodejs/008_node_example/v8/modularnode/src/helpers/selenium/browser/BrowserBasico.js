const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const By = webdriver.By

class  BrowserBasico {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    setDriver(pDriver){
        this.driver = pDriver
    }

    setDriverFirefox(){

    }

    setDriverFirefox(firefoxVersion=36){

        let driver = new webdriver.Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(new firefox.Options().setBinary(process.env.FIREFOX_V66_0_5_NAVIGATOR_BIN))
            .build();
        this.setDriver(driver)
    }
}

module.exports = BrowserBasico