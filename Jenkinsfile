pipeline {
  environment {
    registry = "ossuchas/happyrefund"
    registryCredential = 'docker_ossuchas'
    dockerImage = ''
    image_tag_number = 'v1.28.3'
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ossuchas/HappyRefund.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":" + image_tag_number
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Dangling docker image') {
      steps{
        sh 'docker rmi $(docker images -f dangling=true -q)'
      }
    }
  }
}
