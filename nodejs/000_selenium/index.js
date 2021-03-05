const webdriver = require('selenium-webdriver')
const By = webdriver.By

const driver = new webdriver.Builder().forBrowser('firefox').build()
const url ='www.google.com.br'
driver.manage().window().maximize()
driver.get(url)

let email = 'a1@gmail.com'
driver.findElement(By.name('name')).sendKeys('hack')
driver.findElement(By.name('email')).sendKeys(email)
driver.findElement(By.tagName('button')).click()