# CI Project

This project demonstrates Continuous Integration using:
- Node.js
- Express.js
- Jest (Unit Testing)
- GitHub Actions CI Pipeline

## How it works:
1. I write code locally.
2. I commit and push to GitHub.
3. GitHub Actions automatically:
   - Checks out the code
   - Installs dependencies (`npm ci`)
   - Runs Jest tests (`npm test`)
   - Builds the project

If tests fail, the CI pipeline stops and marks the run as failed.
