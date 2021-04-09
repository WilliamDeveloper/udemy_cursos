const chromeNavigatorBin = "C:/Program Files/Google/Chrome/Application/chrome.exe"
const chromeNavigatorFolder = "C:/Program Files/Google/Chrome/Application/"

const chromeDriverBin = "D:/_dev_/bin/webdriver/chrome/chromedriver.exe"
const chromeDriverFolder = "D:/_dev_/bin/webdriver/chrome/"

process.env['PATH'] =`${chromeDriverFolder};${process.env['PATH']}`
process.env['PATH'] =`${chromeNavigatorFolder};${process.env['PATH']}`


const {Builder} = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const proxy = require('selenium-webdriver/proxy')

const options = new firefox.Options()
options.setProfile('./seleniumTutorial')
const proxyServer = "36.65.148:8080"

const driver = new Builder()
    .forBrowser("chrome")
    // .setFirefoxOptions(options)
    // .setBinary(process.env.FIREFOX_BIN)
    .setProxy(proxy.manual({
        http:proxyServer,
        https:proxyServer,
    }))
    .build()

driver.get("https://whatimyipadress.com")




//
//
//
// const driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .setFirefoxOptions(new firefox.Options().setBinary(process.env.FIREFOX_BIN))
//     .build();
//
// const url ='http://www.google.com.br'
// driver.manage().window().maximize()
// driver.get(url)

// let email = 'a1@gmail.com'
// driver.findElement(By.name('name')).sendKeys('hack')
// driver.findElement(By.name('email')).sendKeys(email)
// driver.findElement(By.tagName('button')).click()