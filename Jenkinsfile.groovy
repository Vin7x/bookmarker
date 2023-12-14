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
                git branch: 'main', url: 'https://github.com/abhishekpatil2006/abhishekpatil2006.git'
            
            }
         }
    }
}
