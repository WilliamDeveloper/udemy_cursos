const chromeNavigatorBin = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const chromeNavigatorFolder = "C:/Program Files/Google/Chrome/Application/"
const chromeDriverBin = "D:/_dev_/bin/webdriver/chrome/chromedriver.exe"
const chromeDriverFolder = "D:/_dev_/bin/webdriver/chrome/"

const firefoNavigatorBin="D:/_dev_/_ide_/browsers/firefox-66.0.5/App/Firefox64/firefox.exe"
const firefoNavigatorFolder="D:/_dev_/_ide_/browsers/firefox-66.0.5/App/Firefox64/"
const firefoxDriverBin = "D:/_dev_/bin/webdriver/firefox/geckodriver.exe"
const firefoxDriverFolder = "D:/_dev_/bin/webdriver/firefox/"

process.env['PATH'] =`${firefoNavigatorFolder};${process.env['PATH']}`
process.env['PATH'] =`${firefoxDriverFolder};${process.env['PATH']}`

process.env['FIREFOX_BIN']=`${firefoNavigatorBin}`

// process.env['PATH'] =`${chromeNavigator};${process.env['PATH']}`
// process.env['PATH'] =`${chromeDriver};${process.env['PATH']}`

// process.env['SELENIUM_BROWSER']=''ch


const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const By = webdriver.By


// let options = new firefox.Options()
// let profile = ''
// options.setProfile(profile)

// const driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     // .setFirefoxOptions(options)
//     .build()

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