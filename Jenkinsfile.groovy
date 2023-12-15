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
