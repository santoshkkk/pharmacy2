pipeline {
    agent any
    environment {
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
                sh '/home/ec2-user/.nvm/versions/node/v15.0.0/bin/npm run build'
            }
        }
        
        stage('Build') {
            steps {
                // Run npm build command
                sh '/home/ec2-user/.nvm/versions/node/v15.0.0/bin/npm run predeploy'
            }
        }
        
        
    }
}
