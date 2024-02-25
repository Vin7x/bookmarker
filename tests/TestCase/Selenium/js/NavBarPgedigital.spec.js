// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const assert = require('assert')

describe('CT01 - PGEDigital', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })

  it('CT01 - PGEDigital', async function() {
    try {

    
    //Espera de forma implícita de 5 segundos, a menos que o item seja encontrado antes do timeout
    await driver.manage().setTimeouts({ implicit: 5000 });
    await driver.get("http://10.120.100.168/paivav/pgedigital/")
    await driver.manage().window().setRect({ width: 1899, height: 1028 })
    await driver.findElement(By.id("login")).click()
    await driver.findElement(By.id("login")).sendKeys("testepgedigital")
    await driver.findElement(By.id("senha")).sendKeys("Senha1234")
    await driver.findElement(By.css(".btn-lg")).click()
    console.log("Login efetuado com sucesso!");
    await driver.findElement(By.css("#menu_principal > .dropdown:nth-child(1) > .dropdown-toggle")).click()
    await driver.findElement(By.css("#menu_principal > li:nth-child(2) > a")).click()
    await driver.findElement(By.css(".dropdown:nth-child(4) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".dropdown:nth-child(5) > .dropdown-toggle")).click()
    await driver.findElement(By.css("#menu_principal > li:nth-child(6) > a")).click()
    await driver.findElement(By.css(".dropdown:nth-child(8) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".dropdown:nth-child(9) > .dropdown-toggle")).click()
    await driver.findElement(By.css("#menu_principal > .dropdown:nth-child(1) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".open:nth-child(1) li:nth-child(1) > a")).click()
    await driver.findElement(By.css(".dropdown:nth-child(4) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".dropdown:nth-child(4) li:nth-child(1) > a")).click()
    await driver.findElement(By.css(".dropdown:nth-child(5) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".dropdown:nth-child(5) li:nth-child(1) > a")).click()
    await driver.findElement(By.css(".dropdown:nth-child(7) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".dropdown:nth-child(7) > .dropdown-menu > li:nth-child(1) > a")).click()
    console.log("antes do botao cancelar");
    await driver.findElement(By.id("btn-cancelar")).click()
    await driver.findElement(By.css(".dropdown:nth-child(8) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".dropdown:nth-child(8) > .dropdown-menu > li:nth-child(2) > a")).click()
    await driver.findElement(By.css(".btn-block")).click()
    await driver.findElement(By.css(".dropdown:nth-child(9) > .dropdown-toggle")).click()
    await driver.findElement(By.css(".dropdown li:nth-child(11) > a")).click()
    await driver.findElement(By.css("#menu_principal > li:nth-child(3) > a")).click()
    console.log("Teste bem-sucedido!");
    } catch (e) {
      console.log('erro; ', e)
    }
  })
})