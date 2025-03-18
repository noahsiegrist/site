import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an SVG with the NS text in the green gradient
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#73A965" />
      <stop offset="100%" stop-color="#4D8A3F" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" fill="transparent" />
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="url(#greenGradient)">NS</text>
</svg>`;

// Write the SVG file
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), svgContent);

console.log('SVG favicon created at public/favicon.svg');
console.log('Update the index.html to use this SVG favicon');
