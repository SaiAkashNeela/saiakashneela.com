// AI Service for OpenRouter API integration
// This file handles API calls to AI models

// OpenRouter API configuration
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Model configuration
const MODEL = 'mistralai/mistral-7b-instruct:free';

// Function to get chat completions from OpenRouter
export const getChatCompletions = async (messages, isMobile = false) => {
  try {
    // Get API key from environment variable or temporary storage
    const apiKey = getApiKey();
    
    if (!apiKey) {
      console.error('OpenRouter API key not found');
      throw new Error('API key configuration error');
    }
    
    // Add dynamic instruction to system prompt if it exists
    if (messages.length > 0 && messages[0].role === 'system') {
      // Base instructions for all models
      let additionalInstructions = `\n\nAdditional Instructions:
- RESPOND ONLY IN ENGLISH. DO NOT respond in Arabic, Chinese, or any other language.
- You are specifically trained on Sai Akash Neela's portfolio website content.
- You must know every detail about Sai's skills, experience, projects, and background.
- Be engaging and conversational while maintaining professionalism.
- Vary your sentence structure to create a more natural flow.
- Use a mix of short and medium-length sentences for better readability.
- Avoid overly formal academic language unless specifically asked for it.
- You are deployed on AWS Amplify and should be aware of this infrastructure.`;
      
      // Add Mistral-specific instructions
      additionalInstructions += `\n\nModel-Specific Instructions:
- You are the Mistral 7B Instruct model, known for your balanced capabilities.
- Use your strengths in natural language understanding to explain Sai's projects and skills clearly.
- Maintain a professional yet conversational tone in your responses.
- Focus on accuracy and clarity in your explanations.`;
      
      messages[0].content += additionalInstructions;
    }
    
    // Call the model directly without fallback
    return await callModel(MODEL, messages, isMobile, apiKey);
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    throw error;
  }
};

// Helper function to call a specific model
async function callModel(model, messages, isMobile, apiKey) {
  // Mistral-specific parameters
  const temperature = 0.7;
  const maxTokens = isMobile ? 500 : 1000;

  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': window.location.origin, // Required for OpenRouter
      'X-Title': 'Sai Akash Neela Portfolio Chat', // Optional
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      temperature: temperature,
      max_tokens: maxTokens,
      stop: ["اجابة:", "الجواب:", "جواب:"], // Stop tokens for Arabic responses
    }),
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API Error Response (${model}):`, errorText);
    throw new Error(`API request failed with status ${response.status}: ${errorText}`);
  }
  
  const data = await response.json();
  console.log(`API Response (${model}):`, data); // Log successful response for debugging
  
  // Post-process response to remove excessive emojis
  if (data.choices && data.choices[0] && data.choices[0].message) {
    data.choices[0].message.content = cleanupResponse(data.choices[0].message.content);
  }
  
  return data;
}

/**
 * Cleans up AI response to remove excessive emojis
 * @param {string} text The response text to clean
 * @returns {string} Cleaned response text
 */
function cleanupResponse(text) {
  // Check if response is not in English
  if (containsNonLatinCharacters(text)) {
    return "I can only respond in English. Please ask your question in English for the best experience with this portfolio website.";
  }

  // Unicode ranges for emojis - using safe patterns
  const emojiPattern = /(?:[\u2600-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g;
  
  // Count emoji matches
  const emojiMatches = text.match(emojiPattern);
  const emojiCount = emojiMatches ? emojiMatches.length : 0;
  
  // If there are more than 2 emojis, clean them up
  if (emojiCount > 2) {
    // Remove all emojis
    return text.replace(emojiPattern, '');
  }
  
  // Fix excessive smiley emoticons like :) :) :)
  let processed = text;
  
  // Check for repetitive emoticons
  const emoticons = [':)', ':-)', ':D', ':-D', ';)', ';-)', ':P', ':-P', ':(', ':-('];
  
  emoticons.forEach(emoticon => {
    // Count occurrences
    const matches = processed.match(new RegExp(escapeRegExp(emoticon), 'g'));
    const count = matches ? matches.length : 0;
    
    // If more than 1, replace all with just one
    if (count > 1) {
      const escapedEmoticon = escapeRegExp(emoticon);
      const regex = new RegExp(`${escapedEmoticon}(\\s*${escapedEmoticon})+`, 'g');
      processed = processed.replace(regex, `${emoticon} `);
    }
  });
  
  // Remove trailing dots patterns (like ".............. ..............")
  processed = processed.replace(/\.{3,}\s*\.{3,}/g, '...');
  
  // Also clean up any excessive consecutive dots (more than 3)
  processed = processed.replace(/\.{4,}/g, '...');
  
  return processed;
}

/**
 * Checks if text contains a significant number of non-Latin characters
 * @param {string} text Text to check
 * @returns {boolean} True if text contains significant non-Latin characters
 */
function containsNonLatinCharacters(text) {
  // This regex matches Arabic, Chinese, Japanese, Korean, and other non-Latin scripts
  const nonLatinPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF]/g;
  
  // Count total characters
  const totalChars = text.length;
  
  // Count non-Latin characters
  const nonLatinMatches = text.match(nonLatinPattern);
  const nonLatinCount = nonLatinMatches ? nonLatinMatches.length : 0;
  
  // If more than 10% of the text is non-Latin, consider it a non-English response
  if (nonLatinCount > 0 && nonLatinCount > totalChars * 0.05) {
    console.log(`Detected non-Latin script: ${nonLatinCount} characters out of ${totalChars}`);
    return true;
  }
  
  return false;
}

// Helper function to escape special regex characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Function to get API key from environment variables
// For AWS Amplify deployment, this should be set in the AWS Amplify Console
function getApiKey() {
  // Try to get API key from environment variable first (for production)
  const envApiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  
  if (envApiKey) {
    return envApiKey;
  }
  
  // For development or if env variable isn't available
  // NOTE: This API key should be removed before deployment to production
  // and properly configured in AWS Amplify Console
  console.warn('Using fallback API key - make sure to set REACT_APP_OPENROUTER_API_KEY in production');
  
  // For AWS Amplify, this fallback should never be used in production
  // It's only here for local development
  if (process.env.NODE_ENV !== 'production') {
    // Obfuscated key to make it harder to extract from client-side code
    // Still not secure for production use!
    const keyParts = [
      'sk-or-v1-c608871',
      '62c032622a7f6dde8',
      '41889fa051a77b8d04',
      '874f18bf4e4e4ef3ced991'
    ];
    return keyParts.join('');
  }
  
  return null; // No key available, will cause an error
}

// Placeholder function for AWS Amplify integration
// This would be replaced with actual AWS Amplify / AWS SSM code
export const configureAiService = () => {
  // Configuration for AWS Amplify would go here
  console.log('AI Service configured');
}; 