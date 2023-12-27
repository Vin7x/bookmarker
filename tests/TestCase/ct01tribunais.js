// Generated by Selenium IDE
const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const assert = require('assert');

(async function firstScript() {
  let driver;
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  try {
    // Configurando opções do Chrome
    const firefoxOptions = new firefox.Options()
      // .addArguments('--headless')
      .addArguments('--disable-dev-shm-usage');
      
    driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(firefoxOptions)
      .build();
 

    // Test name: CT01 - tribunais
    // Step # | name | target | value | comment
    // 1 | open | http://pgedigital/ |  | 
    await driver.get("http://pgedigital/")
    // 2 | click | id=login |  | 
    await driver.findElement(By.id("login")).click()
    // 3 | type | id=login | testepgedigital | 
    await driver.findElement(By.id("login")).sendKeys("paivav")
    // 4 | type | id=senha | Senha1234 | 
    await driver.findElement(By.id("senha")).sendKeys("1122334455V!")
    // 5 | click | xpath=//button[@type='submit'] |  | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//button[@type=\'submit\']")).click())); 
    // 6 | click | xpath=//ul[@id='menu_principal']/li[4]/a |  | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//ul[@id=\'menu_principal\']/li[4]/a")).click()));
    // 7 | click | xpath=//ul[@id='menu_principal']/li[4]/ul/li/a |  | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//ul[@id=\'menu_principal\']/li[4]/ul/li/a")).click()));
    // 8 | click | xpath=//span[contains(.,'Tribunal')] |  | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//span[contains(.,\'Tribunal\')]")).click()));
    // 9 | click | xpath=//span[contains(.,'TJRJ (Tribunal de Justiça do Estado do RJ)')] |  | 
    await driver.findElement(By.xpath("//span[contains(.,\'TJRJ (Tribunal de Justiça do Estado do RJ)\')]")).click()
    // 10 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 11 | click | linkText=0183775-10.2023.8.19.0001 |  | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 12 | storeWindowHandle | root |  | 
    await driver.findElement(By.linkText("0183775-10.2023.8.19.0001")).click()
    // 13 | selectWindow | handle=${win2656} |  | 
    vars["win2656"] = await waitForWindow(2000)
    // 14 | click | xpath=//a[@id='polos-li']/h3 |  | 
    vars["root"] = await driver.getWindowHandle()
    // 15 | click | xpath=//a[@id='dadosadd-li']/h3 |  | 
    await driver.switchTo().window(vars["win2656"])
    // 16 | click | xpath=//a[@id='movimentacoes-li']/h3 |  | 
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    // 17 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    await driver.findElement(By.xpath("//a[@id=\'dadosadd-li\']/h3")).click()
    // 18 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.findElement(By.xpath("//a[@id=\'movimentacoes-li\']/h3")).click()
    // 19 | selectWindow | handle=${root} |  | 
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    // 20 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 21 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[3]/a/span |  | 
    await driver.switchTo().window(vars["root"])
    // 22 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 23 | click | linkText=5019713-72.2023.4.02.0000 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[3]/a/span")).click()
    // 24 | selectWindow | handle=${win8365} |  | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 25 | click | xpath=//a[@id='polos-li']/h3 |  | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 26 | click | xpath=//a[@id='dadosadd-li']/h3 |  | 
    await driver.findElement(By.linkText("5019713-72.2023.4.02.0000")).click()
    // 27 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    vars["win8365"] = await waitForWindow(2000)
    // 28 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.switchTo().window(vars["win8365"])
    // 29 | selectWindow | handle=${root} |  | 
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    // 30 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    await driver.findElement(By.xpath("//a[@id=\'dadosadd-li\']/h3")).click()
    // 31 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[4]/a/span |  | 
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    // 32 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 33 | click | xpath=//a[contains(text(),'5015951-20.2023.4.02.5118')] |  | 
    await driver.switchTo().window(vars["root"])
    // 34 | selectWindow | handle=${win4944} |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 35 | click | xpath=//a[@id='polos-li']/h3 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[4]/a/span")).click()
    // 36 | click | xpath=//a[@id='dadosadd-li']/h3 |  | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 37 | click | xpath=//a[@id='documentos-li'] |  | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 38 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.findElement(By.xpath("//a[contains(text(),\'5015951-20.2023.4.02.5118\')]")).click()
    // 39 | selectWindow | handle=${root} |  | 
    vars["win4944"] = await waitForWindow(2000)
    // 40 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    await driver.switchTo().window(vars["win4944"])
    // 41 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[5]/a/span |  | 
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    // 42 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.findElement(By.xpath("//a[@id=\'dadosadd-li\']/h3")).click()
    // 43 | click | xpath=//a[contains(text(),'0100998-48.2023.5.01.0282')] |  | 
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']")).click()
    // 44 | selectWindow | handle=${win113} |  | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 45 | click | xpath=//a[@id='polos-li']/h3 |  | 
    await driver.switchTo().window(vars["root"])
    // 46 | click | xpath=//a[@id='dadosadd-li']/h3 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 47 | click | id=documentos-li |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[5]/a/span")).click()
    // 48 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 49 | selectWindow | handle=${root} |  | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 50 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    await driver.findElement(By.xpath("//a[contains(text(),\'0100998-48.2023.5.01.0282\')]")).click()
    // 51 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[6]/a/span |  | 
    vars["win113"] = await waitForWindow(2000)
    // 52 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.switchTo().window(vars["win113"])
    // 53 | click | xpath=//a[contains(text(),'0100607-70.2022.5.01.0204')] |  | 
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    // 54 | selectWindow | handle=${win7637} |  | 
    await driver.findElement(By.xpath("//a[@id=\'dadosadd-li\']/h3")).click()
    // 55 | click | id=polos-li |  | 
    await driver.findElement(By.id("documentos-li")).click()
    // 56 | click | id=dadosadd-li |  | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 57 | click | xpath=//a[@id='movimentacoes-li']/h3 |  | 
    await driver.switchTo().window(vars["root"])
    // 58 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 59 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[6]/a/span")).click()
    // 60 | selectWindow | handle=${root} |  | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 61 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 62 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[7]/a/span |  | 
    await driver.findElement(By.xpath("//a[contains(text(),\'0100607-70.2022.5.01.0204\')]")).click()
    // 63 | click | xpath=//input[@value='Buscar'] |  | 
    vars["win7637"] = await waitForWindow(2000)
    // 64 | click | xpath=//a[contains(text(),'0969365-11.2023.8.19.0001')] |  | 
    await driver.switchTo().window(vars["win7637"])
    // 65 | selectWindow | handle=${win8167} |  | 
    await driver.findElement(By.id("polos-li")).click()
    // 66 | click | xpath=//a[@id='polos-li']/h3 |  | 
    await driver.findElement(By.id("dadosadd-li")).click()
    // 67 | click | xpath=//a[@id='dadosadd-li']/h3 |  | 
    await driver.findElement(By.xpath("//a[@id=\'movimentacoes-li\']/h3")).click()
    // 68 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    // 69 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 70 | selectWindow | handle=${root} |  | 
    await driver.switchTo().window(vars["root"])
    // 71 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 72 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[8]/a/span |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[7]/a/span")).click()
    // 73 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 74 | click | xpath=//a[contains(text(),'0092210-78.2023.1.00.0000')] |  | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 75 | selectWindow | handle=${win7053} |  | 
    await driver.findElement(By.xpath("//a[contains(text(),\'0969365-11.2023.8.19.0001\')]")).click()
    // 76 | click | xpath=//a[@id='polos-li']/h3 |  | 
    vars["win8167"] = await waitForWindow(2000)
    // 77 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    await driver.switchTo().window(vars["win8167"])
    // 78 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    // 79 | selectWindow | handle=${root} |  | 
    await driver.findElement(By.xpath("//a[@id=\'dadosadd-li\']/h3")).click()
    // 80 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    // 81 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[9]/a/span |  | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 82 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.switchTo().window(vars["root"])
    // 83 | click | xpath=//a[contains(text(),'0101233-30.2018.5.01.0075')] |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 84 | selectWindow | handle=${win2557} |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[8]/a/span")).click()
    // 85 | click | id=polos-li |  | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 86 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 87 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.findElement(By.xpath("//a[contains(text(),\'0092210-78.2023.1.00.0000\')]")).click()
    // 88 | selectWindow | handle=${root} |  | 
    vars["win7053"] = await waitForWindow(2000)
    // 89 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    await driver.switchTo().window(vars["win7053"])
    // 90 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[10]/a/span |  | 
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    // 91 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    // 92 | click | xpath=//a[contains(text(),'0029782-81.2022.8.19.0000')] |  | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 93 | selectWindow | handle=${win5902} |  | 
    await driver.switchTo().window(vars["root"])
    // 94 | click | xpath=//a[@id='polos-li']/h3 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 95 | click | xpath=//a[@id='dadosadd-li']/h3 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[9]/a/span")).click()
    // 96 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    // 97 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 98 | selectWindow | handle=${root} |  | 
    await driver.findElement(By.xpath("//a[contains(text(),\'0101233-30.2018.5.01.0075\')]")).click()
    // 99 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/button/span |  | 
    vars["win2557"] = await waitForWindow(2000)
    // 100 | click | xpath=//form[@id='formBusca']/div/div[10]/div/div/div/ul/li[11]/a/span |  | 
    await driver.switchTo().window(vars["win2557"])
    // 101 | click | xpath=//input[@value='Buscar'] |  | 
    await driver.findElement(By.id("polos-li")).click()
    // 102 | click | xpath=//a[contains(text(),'0963715-80.2023.8.19.0001')] |  | 
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    // 103 | selectWindow | handle=${win8988} |  | 
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    // 104 | click | xpath=//a[@id='polos-li']/h3 |  | 
    await driver.switchTo().window(vars["root"])
    // 105 | click | xpath=//a[@id='dadosadd-li']/h3 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    // 106 | click | xpath=//a[@id='documentos-li']/h3 |  | 
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[10]/a/span")).click()
    // 107 | waitForElementPresent | id=jqgh_grid-table_rn | 10000 | 
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.xpath("//a[contains(text(),\'0029782-81.2022.8.19.0000\')]")).click()
    vars["win5902"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win5902"])
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    await driver.findElement(By.xpath("//a[@id=\'dadosadd-li\']/h3")).click()
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    await driver.switchTo().window(vars["root"])
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/button/span")).click()
    await driver.findElement(By.xpath("//form[@id=\'formBusca\']/div/div[10]/div/div/div/ul/li[11]/a/span")).click()
    await driver.findElement(By.xpath("//input[@value=\'Buscar\']")).click()
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.xpath("//a[contains(text(),\'0963715-80.2023.8.19.0001\')]")).click()
    vars["win8988"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win8988"])
    await driver.findElement(By.xpath("//a[@id=\'polos-li\']/h3")).click()
    await driver.findElement(By.xpath("//a[@id=\'dadosadd-li\']/h3")).click()
    await driver.findElement(By.xpath("//a[@id=\'documentos-li\']/h3")).click()
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)
    console.log("Teste finalizado!");
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  // } finally {
  //   if (driver) {
  //     await driver.quit();
  //   }
  }
})();