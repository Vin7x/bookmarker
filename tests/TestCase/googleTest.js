const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');
const { log } = require('console');

(async function firstScript() {
  try {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();

    await driver.get("https://www.google.com/")
    console.log('Navegador aberto com sucesso!');

    await driver.findElement(By.xpath("//textarea")).click()
    console.log('Tela carregada com sucesso!');
    await driver.findElement(By.xpath("//textarea")).click()
    console.log('Area de pesquisa carregada com sucesso!');
    await driver.findElement(By.css(".zgAlFc path")).click()
    await driver.findElement(By.xpath("//div[@id=\'searchform\']")).click()
    console.log('Pesquisa efetuada com sucesso!');
    await driver.findElement(By.id("APjFqb")).click()
    await driver.findElement(By.id("APjFqb")).sendKeys("jenkins")
    await driver.findElement(By.css(".ly0Ckb")).click()
    {
      const element = await driver.findElement(By.linkText("Notícias"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".zgAlFc path")).click()
    await driver.findElement(By.id("APjFqb")).click()
    await driver.findElement(By.css(".zgAlFc svg")).click()
    {
      const element = await driver.findElement(By.css(".zgAlFc svg"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    console.log("Teste bem-sucedido!");
  } catch (error) {
    console.log(error);
  }
})();