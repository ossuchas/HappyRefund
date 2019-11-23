pipeline {
  environment {
    registry = "apthailand/suchat_s"
    registryCredential = 'docker_ossuchas'
    dockerImage = ''
    image_tag_number = 'happyrefund_front_v1.0.4'
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
    stage('Deploy to OKD') {
      steps{
          sh 'oc login https://devops01-master.apthai.com:8443 --token=TxEuG9CpgcfNcqdskLt1osM2hSUKPbCGRyypLxLx2pE'
          sh 'oc project testrepo'
      }
    }
  }
}
