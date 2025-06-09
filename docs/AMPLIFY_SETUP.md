# AWS Amplify Setup Instructions

This document outlines the steps needed to properly set up the portfolio website on AWS Amplify, especially regarding the secure handling of API keys.

## Environment Variables

For security reasons, API keys should never be stored directly in the codebase. Instead, use AWS Amplify's environment variables feature.

### Required Environment Variables

1. Set up the following environment variable in the AWS Amplify Console:

```
REACT_APP_OPENROUTER_API_KEY=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
```

### How to Configure Environment Variables in AWS Amplify

1. Go to the AWS Amplify Console
2. Select your app
3. Click on "Environment variables" in the left sidebar
4. Add the required environment variables
5. Save your changes

### Security Considerations

- Never commit API keys to your repository
- Use environment variables for all sensitive information
- Consider using AWS Secrets Manager for enhanced security

## Build Settings

The `amplify.yml` file contains the build configuration for your project. Make sure it's properly set up for your project's needs.

## Deployment

AWS Amplify will automatically deploy your application when you push changes to the connected repository. Make sure your build settings are correct and your environment variables are properly configured.

## Testing

After deployment, test that the application works correctly with the configured environment variables.

## Troubleshooting

If you encounter issues with environment variables not being available in your application:

1. Check that they are properly configured in the AWS Amplify Console
2. Verify that your application is accessing them correctly using `process.env.VARIABLE_NAME`
3. Rebuild and redeploy the application after making changes to environment variables 