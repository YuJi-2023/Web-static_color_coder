# Project Readme

## Project Description

This project is automatically deployed to AWS S3 using GitHub Actions. Whenever there is a push to the `master` branch of this repository, a GitHub Actions workflow is triggered, which deploys the latest version of the project to an AWS S3 bucket. This ensures that the latest version of the project is always accessible online.

## Deployment Process

The deployment process is fully automated. Here's how it works:

1. Any push to the `master` branch triggers the GitHub Actions workflow.

2. The workflow builds the project, compiles any necessary assets, and prepares it for deployment.

3. The built project is then uploaded to an AWS S3 bucket.

4. Once the deployment is complete, the project becomes accessible online.

## Viewing the Deployed Site

You can view the deployed site by following this link: [View the Site](https://sophia-bookish.s3.ap-southeast-2.amazonaws.com/index.html)

![preview](images/preview.png)
