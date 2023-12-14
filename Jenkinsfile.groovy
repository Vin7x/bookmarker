pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('git') {
            steps {
                git branch: 'dev', url: 'https://github.com/Vin7x/bookmarker.git'
                echo 'Versionamento funcionando!'
            }
        }

        // stage('Install Dependencies') {
        //     steps {
        //         script {
        //             sh 'npm install selenium-webdriver'
        //         }
        //     }
        // }

        // stage('Configure Selenium') {
        //     steps {
        //         script {
        //             def driver = new org.openqa.selenium.chrome.ChromeDriver()
        //         }
        //     }
        // }

        stage('Run Selenium IDE Tests') {
            steps {
                script {
                    // Instalação das dependências do npm (se ainda não foi feita)
                    // start 'npm install'

                    // Execução do arquivo .side usando o Selenium IDE Runner
                    // powershell  'selenium-side-runner -c "chrome" -p 4444 -u http://localhost:4444/wd/hub -w 10 /tests/TestCase/googleTest.side'
                    powershell  'vendor/bin/phpunit tests/googleTest.php'
                }
            }
        }

    }
}
