pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh 'sudo rm -rf /var/www/qterra-front'
                sh 'sudo cp -r ${WORKSPACE}/build/ /var/www/qterra-front/'
            }
        }
    }
}