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
                checkout scm
            }
        }
        
        stage('Print Workspace') {
            steps {
                echo "Workspace contents:"
                sh "ls -la"
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm predeploy'
            }
        }
        
        stage('Build') {
            steps {
                // Run npm build command
                sh 'npm run build'
            }
        }
        
        
    }
}
