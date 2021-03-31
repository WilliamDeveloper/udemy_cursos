class  BrowserBasico {
    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    setDriver(pDriver){
        this.driver = pDriver
    }

    setDriverFirefox(){

    }

    setDriverChrome(firefoxVersion=36){

    }
}

module.exports = BrowserBasico