<?php

use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use PHPUnit\Framework\TestCase;

class PaginaInicialTest extends TestCase
{
    public function testSomething()
    {
        $host = 'http://localhost:4444/';
        $driver = RemoteWebDriver::create($host, DesiredCapabilities::chrome());

        $driver->get('http://localhost/bookmarker/users');

        $title = 'CakePHP: the rapid development php framework: Users';
        self::assertEquals($title, $driver->getTitle());

    }
}