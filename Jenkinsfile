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
                // Use the specified Node.js version
                sh '/opt/.nvm/versions/node/v15.0.0/bin/node --version' // Verify Node.js version
                
                // Navigate to the project directory
                dir('/var/lib/jenkins/workspace/POC') { // Path to the project directory
                    // Run npm install
                    sh "/opt/.nvm/versions/node/v15.0.0/bin/npm install"
                }
            }
        }
        
        stage('Build') {
            steps {
                // Build using npm
                dir('/var/lib/jenkins/workspace/POC') { // Path to the project directory
                    sh "/opt/.nvm/versions/node/v15.0.0/bin/npm run build"
                }
            }
        }
        
        // Add other stages as needed
    }
}
