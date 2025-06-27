pipeline {
  agent any
  tools {
  nodejs 'NodeJS'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Start API') {
      steps {
        bat 'start /B node app.js'
        sleep time: 5, unit: 'SECONDS'
      }
    }

    stage('Install Newman') {
      steps {
        bat 'npm install newman'
      }
    }

    stage('Run Postman Tests') {
      steps {
        bat 'npx newman run postman\\collection.json --reporters cli,html --reporter-html-export newman-report.html'
      }
    }

    stage('Archive Report') {
      steps {
        archiveArtifacts artifacts: 'newman-report.html', allowEmptyArchive: true
      }
    }
  }
}
