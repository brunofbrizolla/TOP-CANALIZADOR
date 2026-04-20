const fs = require('fs');

const path = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\top-canalizador\\src\\layouts\\Layout.astro';
let content = fs.readFileSync(path, 'utf8');

// fix iframe
content = content.replace(/onload="Wpfcll\.r\(this,true\);" data-wpfc-original-src="https:\/\/topcanalizador\.com\/wp-content\/plugins\/wp-fastest-cache-premium\/pro\/templates\/youtube\.html#([^?"]+)[^"]*"/g, 
  'src="https://www.youtube.com/embed/$1"');

// Fix remaining topcanalizador URLs in Layout.astro
content = content.replace(/https:\/\/topcanalizador\.com\/wp-content\/[^'"]+/g, (match) => {
    return match.replace('https://topcanalizador.com', '');
});

fs.writeFileSync(path, content);
console.log('Fixed Layout.astro');
