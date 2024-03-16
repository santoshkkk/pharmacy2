pipeline {
    agent any
    
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
        
        stage('Checkout') {
            steps {
                // Lightweight checkout support not available, falling back to full checkout
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Add the node binary directory to the PATH
                script {
                    env.PATH = "/opt/.nvm/versions/node/v15.0.0/bin:${env.PATH}"
                }
                
                // Navigate to the project directory
                dir('/var/lib/jenkins/workspace/POC') { // Path to the project directory
                    // Run npm install
                    sh 'npm install'
                }
            }
        }
        
        stage('Build') {
            steps {
                // Build using npm
                dir('/var/lib/jenkins/workspace/POC') { // Path to the project directory
                    sh 'npm run build'
                }
            }
        }
        
        stage('Publish') {
            steps {
                // Publish using npm
                withCredentials([file(credentialsId: 'npmuser', variable: 'npm')]) {
                    dir('/var/lib/jenkins/workspace/POC') { // Path to the project directory
                        sh 'npm publish --userconfig $npm'
                    }
                }
            }
        }
        
        // Add other stages as needed
    }
}
