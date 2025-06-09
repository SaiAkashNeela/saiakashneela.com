# Sai Akash Neela - Portfolio Website

A modern, interactive portfolio website built with React and deployed on AWS Amplify.

## Features

- Interactive terminal with command-line interface
- Dynamic background with code particles and circuit lines
- Dark/Light mode toggle
- AI chatbot powered by Mistral 7B Instruct model via OpenRouter
- Responsive design for all device sizes
- Cookie consent management

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS with responsive design
- **Deployment**: AWS Amplify
- **AI Integration**: OpenRouter API with Mistral 7B Instruct model

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with your OpenRouter API key:
   ```
   REACT_APP_OPENROUTER_API_KEY=your_openrouter_api_key
   ```
4. Start the development server:
   ```
   npm start
   ```

## AWS Amplify Deployment

### Initial Setup

1. Log in to AWS Management Console
2. Navigate to AWS Amplify
3. Click "New app" > "Host web app"
4. Choose GitHub as the repository source
5. Connect to your GitHub account and select this repository
6. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `build`

### Environment Variables Configuration

For the AI chat functionality to work properly, you need to configure the OpenRouter API key as an environment variable in AWS Amplify:

1. In your Amplify app, go to "App settings" > "Environment variables"
2. Add a new variable:
   - Key: `REACT_APP_OPENROUTER_API_KEY`
   - Value: Your OpenRouter API key
3. Save and deploy

### Custom Domain Setup (Optional)

1. In your Amplify app, go to "App settings" > "Domain management"
2. Click "Add domain"
3. Enter your domain name and follow the verification steps
4. Configure subdomains as needed

## AI Chatbot Configuration

The chatbot uses OpenRouter API to access the Mistral 7B Instruct model. The system is configured to:

1. Extract content from the website to answer questions
2. Enforce English-only responses
3. Remove emojis and maintain professional tone
4. Optimize responses for mobile devices

### Updating the AI Model

To change the AI model:

1. Edit `src/services/aiService.js`
2. Update the `MODEL` constant
3. Adjust temperature and token settings as needed

## Maintenance

- **Content Updates**: Update site content in the relevant React components
- **AI Training**: The AI automatically crawls the site content on load
- **Styling**: Modify CSS files for design changes

## License

All rights reserved. This code is not open for reuse without permission.
