const fs = require('fs');
const path = require('path');
const https = require('https');

const cssPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\top-canalizador\\public\\wp-content\\cache\\wpfc-minified\\8x6hu8y7\\24ch5.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const fontUrls = [];
const regex = /url\(\/\/(topcanalizador\.com[^)]+)\)/g;
let match;
while ((match = regex.exec(cssContent)) !== null) {
    fontUrls.push(match[1]);
}

const uniqueUrls = [...new Set(fontUrls.map(u => u.replace(/['"]/g, '').split('?')[0].split('#')[0]))];

const fontsDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\top-canalizador\\public\\fonts';
if (!fs.existsSync(fontsDir)){
    fs.mkdirSync(fontsDir, { recursive: true });
}

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get('https://' + url, function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close(resolve); 
            });
        }).on('error', function(err) {
            fs.unlink(dest, () => reject(err));
        });
    });
}

(async () => {
    for (const link of uniqueUrls) {
        const filename = path.basename(link);
        console.log('Downloading', link, 'to', filename);
        try {
            await download(link, path.join(fontsDir, filename));
        } catch (e) {
            console.error('Failed to download', link);
        }
    }
    
    // Replace all //topcanalizador.com/wp-content/.../fonts/ with /fonts/
    const newCssContent = cssContent.replace(/url\(\/\/topcanalizador\.com\/[^)]+\/fonts\/([^)?#'"]+)[^)]*\)/g, "url('/fonts/$1')");
    
    // Some urls might be bold-page-builder icons 
    const finalCss = newCssContent.replace(/url\(['"]?\/\/topcanalizador\.com[^)]+['"]?\)/g, (m) => {
        // extract filename
        const fnameMatch = m.match(/\/([^/?#'")]+)/g);
        if (fnameMatch) {
            const fname = fnameMatch[fnameMatch.length-1].replace('/', '');
            return `url('/fonts/${fname}')`;
        }
        return m;
    });

    fs.writeFileSync(cssPath, newCssContent);
    console.log('Done modifying CSS.');
})();
