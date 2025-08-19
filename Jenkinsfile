pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test'
      }
    }
    stage('Publish Report') {
      steps {
        publishHTML(target: [
          reportName: 'Playwright Report',
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          alwaysLinkToLastBuild: true,
          keepAll: true
        ])
      }
    }
  }
  triggers {
    cron('H H * * *') // runs daily
  }
}
