<?php
require_once('vendor/autoload.php');

use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverKeys;

class GoogleTest extends PHPUnit\Framework\TestCase
{
    protected $webDriver;
    // URL do Selenium Server (neste exemplo, assume-se que o Selenium Server está em execução localmente na porta 4444)
    public function testTitle()
    {
        // URL do Selenium Server
        $host = 'http://localhost:4444/wd/hub';
        $capabilities = Facebook\WebDriver\Remote\DesiredCapabilities::chrome();
        $webDriver = RemoteWebDriver::create($host, $capabilities);

        // URL do Google
        $googleUrl = 'https://www.google.com';

        // Navegar para o Google
        $webDriver->get($googleUrl);

        // Encontrar o campo de pesquisa pelo nome "q" e digitar a consulta desejada
        $searchBox = $webDriver->findElement(WebDriverBy::name('q'));
        $searchBox->sendKeys('jenkins teste automatizado com selenium');
        $searchBox->sendKeys(WebDriverKeys::ENTER);

        // Aguardar alguns segundos para visualizar os resultados (você pode ajustar conforme necessário)
        sleep(5);

        // Fechar o navegador
        $webDriver->quit();
    }

    // Configuração do navegador e inicialização do WebDriver

}
