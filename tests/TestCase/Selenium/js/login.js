const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function firstScript() {
  let driver;

  try {
    // Configurando opções do Chrome
    const chromeOptions = new chrome.Options()
      .addArguments('--no-sandbox')
      .addArguments('--disable-dev-shm-usage')
      .addArguments('--disable-setuid-sandbox')
      .addArguments('--disable-extensions')
      .headless();

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .build();

    await driver.get('http://10.120.100.168/paivav/pgedigital/processo-administrativo');
    console.log('Navegador aberto com sucesso!');

    // Ajuste no setTimeouts
    await driver.manage().setTimeouts({ pageLoad: 10000 }); // 10 segundos

    let login = await driver.findElement(By.name('login'));
    let senha = await driver.findElement(By.name('senha'));
    let Button = await driver.findElement(By.className('btn btn-lg btn-primary btn-block'));

    await login.sendKeys('testepgedigital');
    console.log('Login efetuado com sucesso!');

    await senha.sendKeys('Senha1234');
    console.log('Senha efetuada com sucesso!');

    await Button.click();

    console.log('Teste bem-sucedido!');
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();