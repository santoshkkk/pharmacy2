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
        
        stage('Create Secret') {
            steps {
                script {
                    sh 'kubectl version'
                    env.REGISTRY_SERVER = 'https://index.docker.io/v1/'
                    env.REGISTRY_USER = 'adwaitpawar'
                    env.REGISTRY_PASS = 'Adwaittukarampawar@13'
                    env.REGISTRY_EMAIL = 'adwaitpawar@gmail.com'
                    sh 'kubectl create secret docker-registry dockercred --docker-server=$REGISTRY_SERVER --docker-username=$REGISTRY_USER --docker-password=$REGISTRY_PASS --docker-email=$REGISTRY_EMAIL'
                }
            }
        }
        
        stage('Apply Configuration') {
            steps {
                sh 'kubectl apply --filename kaniko-git.yaml'
            }
        }
    }
}
