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

        stage('Run Selenium Tests') {
            steps {
                script {
                    sh 'vendor\\bin\\phpunit tests\\GoogleTest.php' //arquivo de testes
                }
            }
        }
    }
}
