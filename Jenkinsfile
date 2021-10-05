pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm cache clean --force'
                sh 'npm uninstall'
                sh 'npm install --no-optional'
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh 'rm -rf /var/www/qterra-front'
                sh 'cp -r ${WORKSPACE}/build/ /var/www/qterra-front/'
            }
        }
    }
}