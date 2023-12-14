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
            
            }
         }
    }
}
