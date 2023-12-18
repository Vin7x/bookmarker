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

        stage('Build code') {
            steps {
                bat script: 'node -v' 
            }
        }

       
        stage('selenium tests') {
            steps {
                // echo "Caminho do arquivo: ${WORKSPACE}"
                echo "executando selenium-side-runner"
                bat script: "selenium-side-runner tests/TestCase/GoogleTest.side || exit 0"
                echo "executando selenium via node"
                // bat script: "npm install selenium-webdriver"
                bat script: "node tests/TestCase/login.js || exit 0"
            }
        }
        stage('Publish Report') {
            steps {
                publishHTML([allowMissing: false,
                 alwaysLinkToLastBuild: true, 
                 keepAll: true, 
                 reportDir: '', 
                 reportFiles: 'index.html', 
                 reportName: 'HTML Report', 
                 reportTitles: '', 
                 useWrapperFileDirectly: true]) 
            }
        }
    }
}