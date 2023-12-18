const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');

(async function firstScript() {
  try {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();

    await driver.get('http://10.120.100.168/paivav/pgedigital/processo-administrativo');
    console.log('Navegador aberto com sucesso!');

    await driver.getTitle();
    console.log('Tela carregada com sucesso!');

    await driver.manage().setTimeouts({implicit: 1000})

    let login = await driver.findElement(By.name('login'));
    let senha = await driver.findElement(By.name('senha'));
    let Button = await driver.findElement(By.className('btn btn-lg btn-primary btn-block'));

    await login.sendKeys('paivav');
    console.log('Login efetuado com sucesso!');
    await senha.sendKeys('1122334455V!');
    console.log('Senha efetuada com sucesso!');
    await Button.click();

    // let value = await searchBox.getAttribute("value");
    // assert.deepStrictEqual(value, "Selenium")

    // await driver.quit();
    console.log("Teste bem-sucedido!");
  } catch (error) {
    console.log(error);
  }
})();