const firefoNavigatorBin="D:/_dev_/_ide_/browsers/firefox-66.0.5/App/Firefox64/firefox.exe"
const firefoNavigatorFolder="D:/_dev_/_ide_/browsers/firefox-66.0.5/App/Firefox64/"

const firefoxDriverBin = "D:/_dev_/bin/webdriver/firefox/geckodriver.exe"
const firefoxDriverFolder = "D:/_dev_/bin/webdriver/firefox/"

process.env['PATH'] =`${firefoNavigatorFolder};${process.env['PATH']}`
process.env['PATH'] =`${firefoxDriverFolder};${process.env['PATH']}`

process.env['FIREFOX_BIN']=`${firefoNavigatorBin}`



const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const By = webdriver.By


const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(new firefox.Options().setBinary(process.env.FIREFOX_BIN))
    .build();

const url ='http://www.google.com.br'
driver.manage().window().maximize()
driver.get(url)

// let email = 'a1@gmail.com'
// driver.findElement(By.name('name')).sendKeys('hack')
// driver.findElement(By.name('email')).sendKeys(email)
// driver.findElement(By.tagName('button')).click()