// netlify/functions/ssr/ssr.js
const { readFileSync } = require('fs');
const { resolve, join } = require('path');

const browserDistFolder = resolve(process.cwd(), 'dist/browser');

exports.handler = async (event, context) => {
  try {
    const { path } = event;
    
    console.log('Request path:', path);
    
    // Serve static files directly (CSS, JS, images, etc.)
    if (path.includes('.') && !path.endsWith('/')) {
      try {
        const filePath = join(browserDistFolder, path);
        const fileContent = readFileSync(filePath);
        
        return {
          statusCode: 200,
          headers: {
            'Content-Type': getContentType(path),
            'Cache-Control': 'public, max-age=31536000'
          },
          body: fileContent.toString('base64'),
          isBase64Encoded: true
        };
      } catch (error) {
        console.log('Static file not found:', path);
        return {
          statusCode: 404,
          body: 'File not found: ' + path
        };
      }
    }
    
    // For all HTML routes, serve index.csr.html (Client-Side Rendering)
    try {
      const indexHtml = readFileSync(join(browserDistFolder, 'index.csr.html'), 'utf8');
      console.log('Serving index.csr.html for path:', path);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
        },
        body: indexHtml
      };
    } catch (error) {
      console.error('Error serving index.csr.html:', error);
      return {
        statusCode: 500,
        body: 'Internal Server Error: Could not load index file'
      };
    }

  } catch (error) {
    console.error('Error in function:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error'
    };
  }
};

function getContentType(path) {
  const ext = path.split('.').pop().toLowerCase();
  const contentTypes = {
    'js': 'application/javascript',
    'css': 'text/css',
    'html': 'text/html',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject'
  };
  return contentTypes[ext] || 'application/octet-stream';
}