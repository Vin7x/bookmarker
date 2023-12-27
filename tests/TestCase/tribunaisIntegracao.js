// Generated by Selenium IDE
const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const assert = require('assert');

(async function firstScript() {
  let driver;

  try {
    // Configurando opções do Chrome
    const firefoxOptions = new firefox.Options()
      // .addArguments('--headless')
      .addArguments('--disable-dev-shm-usage');
      
    driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(firefoxOptions)
      .build();
    await driver.get("http://pgedigital/")
    await driver.findElement(By.id("login")).click()
    await driver.findElement(By.id("login")).sendKeys("testepgedigital")
    console.log("Login inserido com sucesso!");
    await driver.findElement(By.id("senha")).click()
    console.log("Senha inserida com sucesso!");
    await driver.findElement(By.id("senha")).sendKeys("Senha1234")
    await driver.findElement(By.css(".btn-lg")).click()
    console.log("Login bem-sucedido!");


    await driver.get("http://pgedigital/m-n-i/consultar-processo/01837751020238190001/TJRJ")
    console.log("Processo TJRJ selecionado com sucesso!");
    await driver.findElement(By.css("#polos-li > h3")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("documentos-li")).click()
    {
      const element = await driver.findElement(By.css("#dadosprocesso-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)


    await driver.get("http://pgedigital//m-n-i/consultar-processo/50159512020234025118/JFRJ")
    console.log("Processo JFRJ selecionado com sucesso!");
    await driver.findElement(By.id("polos-li")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.id("documentos-li"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("#documentos-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#documentos-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)


    await driver.get("http://pgedigital/m-n-i/consultar-processo/09693651120238190001/PJE1")
    console.log("Processo PJE1 selecionado com sucesso!");
    await driver.findElement(By.css("#polos-li > h3")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.id("movimentacoes-li")).click()
    await driver.findElement(By.id("documentos-li")).click()
    {
      const element = await driver.findElement(By.id("documentos-li"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css("#documentos-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#documentos-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css("#documentos-li > h3")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)

    await driver.get("http://pgedigital/m-n-i/consultar-processo/09637158020238190001/PJE223")
    console.log("Processo PJE223 selecionado com sucesso!");
    await driver.findElement(By.id("polos-li")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("documentos-li")).click()
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)

    await driver.get("http://pgedigital/m-n-i/consultar-processo/00922107820231000000/STF")
    console.log("Processo STF selecionado com sucesso!");
    await driver.findElement(By.id("polos-li")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.id("movimentacoes-li")).click()
    {
      const element = await driver.findElement(By.id("movimentacoes-li"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("documentos-li")).click()
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)

    await driver.get("http://pgedigital/m-n-i/consultar-processo/00297828120228190000/STJ")
    console.log("Processo STJ selecionado com sucesso!");
    await driver.findElement(By.id("polos-li")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css(".glyphicon-folder-open"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("#documentos-li > h3")).click()
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)

    await driver.get("http://pgedigital//m-n-i/consultar-processo/50197137220234020000/TRF2")
    console.log("Processo TRF2 selecionado com sucesso!");
    await driver.findElement(By.css("#polos-li > h3")).click()
    await driver.findElement(By.id("dadosadd-li")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("#documentos-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#documentos-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.wait(until.elementLocated(By.css("#jqgh_grid-table_rn")), 10000)

    await driver.get("http://pgedigital//m-n-i/consultar-processo/01009984820235010282/TRT1")
    console.log("Processo TRT1 selecionado com sucesso!");
    await driver.findElement(By.id("polos-li")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("documentos-li")).click()
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)

    await driver.get("http://pgedigital/m-n-i/consultar-processo/01006077020225010204/TRT2")
    console.log("Processo TRT2 selecionado com sucesso!");
    await driver.findElement(By.css("#polos-li > h3")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("#documentos-li > h3")).click()
    await driver.wait(until.elementLocated(By.id("jqgh_grid-table_rn")), 10000)

    await driver.get("http://pgedigital/m-n-i/consultar-processo/01012333020185010075/TST")
    console.log("Processo TST selecionado com sucesso!");
    await driver.findElement(By.css("#polos-li > h3")).click()
    await driver.findElement(By.css("#dadosadd-li > h3")).click()
    await driver.findElement(By.css("#movimentacoes-li > h3")).click()
    {
      const element = await driver.findElement(By.css("#movimentacoes-li > h3"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("#documentos-li > h3")).click()
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