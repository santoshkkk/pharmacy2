pipeline {
    agent any
    
    environment {
        NVM_DIR = "/opt/.nvm"
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/.nvm/versions/node/v15.0.0/bin"
    }
    
    stages {
        stage('Setup') {
            steps {
                script {
                    // Source nvm.sh script
                    sh 'source /opt/.nvm/nvm.sh'
                    
                    // Install Node.js 15.0.0
                    sh 'nvm install 15.0.0'
                    
                    // Use Node.js 15.0.0
                    sh 'nvm use 15.0.0'
                }
            }
        }
        
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
