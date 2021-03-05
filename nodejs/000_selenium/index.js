const chromeNavigator = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
const chromeDriver = "D:/_dev_/bin/webdriver/chrome/chromedriver.exe"

const firefoNavigator="D:/_dev_/_ide_/browsers/firefox-36.0/FirefoxPortable.exe"
const firefoxDriver = "D:/_dev_/bin/webdriver/firefox/geckodriver.exe"


process.env['PATH'] =`${firefoNavigator};${process.env['PATH']}`
process.env['PATH'] =`${firefoxDriver};${process.env['PATH']}`

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