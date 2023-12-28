<?php

use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\WebDriverBy;

class PaginaicialTest extends PHPUnit\Framework\TestCase
{
    protected $webDriver;

    protected function setUp(): void
    {
        $capabilities = \Facebook\WebDriver\Remote\DesiredCapabilities::firefox();
        $this->webDriver = RemoteWebDriver::create('http://localhost:4444/wd/hub', $capabilities);
    }

    public function testTitle()
    {
        $this->webDriver->get('https://google.com');
        $this->assertEquals('Example Domain', $this->webDriver->getTitle());
    }

    protected function tearDown(): void
    {
        $this->webDriver->quit();
    }
}
