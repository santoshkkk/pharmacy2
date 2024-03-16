pipeline {
    agent any
    
    environment {
        NVM_DIR = "/home/ec2-user/.nvm"
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/ec2-user/.nvm/versions/node/v15.0.0/bin"
    }
    
    stages {
        stage('Record Trigger Branch') {
            steps {
                script {
                    // Record the name of the branch that triggered the pipeline
                    def triggerBranch = env.BRANCH_NAME ?: 'main'
                    echo "Triggered by branch: ${triggerBranch}"
                    
                    // You can save this information to a file, send it to an external system,
                    // or use it for any other purpose as needed in your pipeline
                    writeFile file: 'trigger_branch.txt', text: "${triggerBranch}"
                }
            }
        }
        
        stage('Setup') {
            steps {
                sh 'bash -c "source /home/ec2-user/.nvm/nvm.sh && nvm install 15.0.0 && nvm use 15.0.0"'
            }
        }
        
        stage('Print Environment') {
            steps {
                sh 'printenv'
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install && npm run build'
            }
        }
    }
}
