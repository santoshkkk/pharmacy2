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
        
        stage('Print Workspace') {
            steps {
                echo "Workspace contents:"
                sh "ls -la"
            }
        }
        
        stage('Install Dependencies') {
    steps {
        script {
            // Source nvm script to set up Node.js version
            def nvmScript = '/opt/.nvm/nvm.sh'
            sh "source ${nvmScript}"
            
            // Use the specified Node.js version
            def nodeVersion = '15.0.0' // Update with your desired Node.js version
            sh "nvm use ${nodeVersion}"
            
            // Navigate to the project directory
            dir('/var/lib/jenkins/workspace/POC/') { // Update 'your_project_directory' with the path to your project
                // Run npm install
                sh "npm run build"
            }
        }
    }
        }
        
        stage('Build') {
            steps {
                echo "Building on ${params.ENVIRONMENT} environment"
                sh "echo ENVIRONMENT: ${params.ENVIRONMENT}"
                    
                // Run Webpack to bundle the application
                sh 'webpack --config webpack.config.js'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests if applicable
                sh 'npm test'
            }
        }
        
        stage('Build Image through Kaniko') {
            steps {
                echo "Build Image through Kaniko"
                // Add Kaniko build steps here
            }
        }
        
        stage('Push Artifact to Nexus Repo') {
            steps {
                echo "Push Artifact to Nexus Repo"
                // Add Nexus artifact push steps here
            }
        }
        
        stage('Deployment in EKS through Helm') {
            steps {
                echo "Current branch name: ${env.BRANCH_NAME}"
                echo "Deployment in EKS through Helm"
                // Add deployment steps here
            }
        }
    }
}
