// Utility to crawl website content and prepare it for the chatbot

// Function to extract links and their text from the page
const extractLinks = () => {
  return Array.from(document.querySelectorAll('a'))
    .filter(link => link.href && link.textContent.trim())
    .map(link => ({
      text: link.textContent.trim(),
      url: link.href
    }))
    .filter(link => !link.url.includes('mailto:') && !link.url.includes('tel:'))
    .map(link => `Link: ${link.text} - ${link.url}`)
    .join('\n');
};

// Function to extract image alt texts
const extractImageInfo = () => {
  return Array.from(document.querySelectorAll('img'))
    .filter(img => img.alt)
    .map(img => `Image: ${img.alt}`)
    .join('\n');
};

// Function to extract section content by section name/id
const extractSectionContent = (sectionId) => {
  // Try finding by ID first
  const sectionById = document.getElementById(sectionId);
  if (sectionById) {
    return sectionById.innerText;
  }
  
  // Try finding by heading text
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  for (const heading of headings) {
    if (heading.innerText.toLowerCase().includes(sectionId.toLowerCase())) {
      // Get the section content (all elements until the next heading of same or higher level)
      let content = heading.innerText + '\n';
      let element = heading.nextElementSibling;
      const headingLevel = parseInt(heading.tagName.substring(1));
      
      while (element) {
        const tagName = element.tagName;
        if (tagName && tagName.startsWith('H') && parseInt(tagName.substring(1)) <= headingLevel) {
          break;
        }
        if (element.innerText) {
          content += element.innerText + '\n';
        }
        element = element.nextElementSibling;
      }
      
      return content;
    }
  }
  
  // If no section found
  return '';
};

// Function to extract text content from the page
export const extractPageContent = () => {
  // Get metadata
  const title = document.title;
  const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
  const metaKeywords = document.querySelector('meta[name="keywords"]')?.content || '';
  
  // Get headings for structure
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
    .map(heading => `${heading.tagName}: ${heading.innerText}`)
    .join('\n');
  
  // Extract specific sections by common portfolio section names
  const aboutSection = extractSectionContent('about');
  const experienceSection = extractSectionContent('experience') || extractSectionContent('work');
  const projectsSection = extractSectionContent('projects') || extractSectionContent('portfolio');
  const skillsSection = extractSectionContent('skills') || extractSectionContent('technologies');
  const educationSection = extractSectionContent('education');
  const contactSection = extractSectionContent('contact');
  
  // Extract links and images
  const links = extractLinks();
  const images = extractImageInfo();
  
  // Combine all content in a structured format
  const siteContent = `
    PORTFOLIO WEBSITE CONTENT FOR SAI AKASH NEELA
    ---------------------------------------------
    
    BASIC INFO:
    Website Title: ${title}
    Meta Description: ${metaDescription}
    Meta Keywords: ${metaKeywords}
    
    SITE STRUCTURE:
    ${headings}
    
    ABOUT SECTION:
    ${aboutSection}
    
    EXPERIENCE SECTION:
    ${experienceSection}
    
    PROJECTS SECTION:
    ${projectsSection}
    
    SKILLS SECTION:
    ${skillsSection}
    
    EDUCATION SECTION:
    ${educationSection}
    
    CONTACT SECTION:
    ${contactSection}
    
    SITE LINKS:
    ${links}
    
    IMAGE DESCRIPTIONS:
    ${images}
  `;
  
  return siteContent;
};

// Function to chunk content into manageable pieces
export const chunkContent = (content, chunkSize = 1000) => {
  const words = content.split(' ');
  const chunks = [];
  
  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(' '));
  }
  
  return chunks;
};

// Main function to crawl site content
export const crawlSiteContent = () => {
  try {
    const rawContent = extractPageContent();
    console.log('Content crawled:', rawContent.substring(0, 100) + '...');
    return {
      rawContent,
      chunks: chunkContent(rawContent)
    };
  } catch (error) {
    console.error('Error in crawlSiteContent:', error);
    return {
      rawContent: 'Error crawling site content',
      chunks: []
    };
  }
}; 