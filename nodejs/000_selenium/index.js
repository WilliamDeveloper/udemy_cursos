const webdriver = require('selenium-webdriver')
const By = webdriver.By

const driver = new webdriver.Builder().forBrowser('firefox').build()
const url ='www.google.com.br'
driver.manage().window().maximize()
driver.get(url)