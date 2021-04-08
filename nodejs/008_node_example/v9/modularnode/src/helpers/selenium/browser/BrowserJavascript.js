class  BrowserJavascript {

    constructor(pInstanciaBrowser){
        this.browser = pInstanciaBrowser
    }

    doExcecutarScriptJavaScript(pScript){
        // try :
        // self.browser.driver.execute_script(pScript);
        // except Exception as e:
        // self.browser.log.print(f'errojs: {e}')
    }


}

module.exports = BrowserJavascript