// const chromeNavigatorBin = "C:/Program Files/Google/Chrome/Application/chrome.exe"
// const chromeNavigatorFolder = "C:/Program Files/Google/Chrome/Application/"
//
// const chromeDriverBin = "D:/_dev_/bin/webdriver/chrome/chromedriver.exe"
// const chromeDriverFolder = "D:/_dev_/bin/webdriver/chrome/"

// process.env['PATH'] =`${chromeDriverFolder};${process.env['PATH']}`
// process.env['PATH'] =`${chromeNavigatorFolder};${process.env['PATH']}`

// CHROME_NAVIGATOR_BIN=C:/Program Files/Google/Chrome/Application/chrome.exe
// CHROME_NAVIGATOR_FOLDER=C:/Program Files/Google/Chrome/Application/
//
// CHROME_NAVIGATOR_DRIVER_BIN=D:/_dev_/bin/webdriver/chrome/chromedriver.exe
// CHROME_NAVIGATOR_DRIVER_FOLDER=D:/_dev_/bin/webdriver/chrome/

process.env['PATH'] =`${process.env['CHROME_NAVIGATOR_DRIVER_FOLDER']};${process.env['PATH']}`
process.env['PATH'] =`${process.env['CHROME_NAVIGATOR_FOLDER']};${process.env['PATH']}`

console.log('# ', process.env['CHROME_NAVIGATOR_DRIVER_FOLDER'])
console.log('path=> ', process.env['PATH'])




const webdriver = require('selenium-webdriver')
const By = webdriver.By


const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

const url ='http://www.google.com.br'
driver.manage().window().maximize()
driver.get(url)

// let email = 'a1@gmail.com'
// driver.findElement(By.name('name')).sendKeys('hack')
// driver.findElement(By.name('email')).sendKeys(email)
// driver.findElement(By.tagName('button')).click()