pipeline {
  agent any

  stages {
    stage('Start API') {
      steps {
        bat 'start /B node app.js'
        sleep time: 5, unit: 'SECONDS' // wait for server to start
      }
    }

    stage('Install Newman') {
      steps {
        bat 'npm install -g newman'
      }
    }

    stage('Run Postman Tests') {
      steps {
        bat 'newman run postman\\collection.json --reporters cli,html --reporter-html-export newman-report.html'
      }
    }

    stage('Archive Report') {
      steps {
        archiveArtifacts artifacts: 'newman-report.html', allowEmptyArchive: true
      }
    }
  }
}
