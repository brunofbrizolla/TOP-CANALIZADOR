const fs = require('fs');
const path = require('path');
const https = require('https');

const cssList = [
    'ee6bs9us/24ch5.css',
    '1b62s0w0/24ch5.css',
    '8x6hu8y7/24ch5.css',
    'eephyui9/24ch5.css'
];

const fontsDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\top-canalizador\\public\\fonts';
if (!fs.existsSync(fontsDir)){
    fs.mkdirSync(fontsDir, { recursive: true });
}

function download(url, dest) {
    return new Promise((resolve, reject) => {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        const file = fs.createWriteStream(dest);
        const reqUrl = url.startsWith('http') ? url : 'https://topcanalizador.com' + url;
        console.log('Fetching', reqUrl);
        https.get(reqUrl, function(response) {
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
    for (const cssFile of cssList) {
        const dest = `C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\top-canalizador\\public\\wp-content\\cache\\wpfc-minified\\${cssFile}`;
        await download('/wp-content/cache/wpfc-minified/' + cssFile, dest);
        
        let cssContent = fs.readFileSync(dest, 'utf8');
        
        // Find urls
        const regex = /url\(['"]?([^)'"]+)['"]?\)/g;
        let match;
        const fontUrls = [];
        while ((match = regex.exec(cssContent)) !== null) {
            let u = match[1];
            if (u.includes('data:image')) continue;
            fontUrls.push(u);
        }
        
        const uniqueUrls = [...new Set(fontUrls)];
        for (let link of uniqueUrls) {
            if (link.startsWith('//')) link = 'https:' + link;
            if (!link.startsWith('http') && !link.startsWith('/')) continue; // relative maybe?
            
            // if it's a font, download it
            if (link.match(/\.(woff2?|ttf|eot|svg|otf)/i)) {
                const cleanLink = link.split('?')[0].split('#')[0];
                const filename = path.basename(cleanLink);
                
                try {
                    await download(link, path.join(fontsDir, filename));
                    // Replace in CSS
                    const linkRegex = new RegExp(link.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g');
                    cssContent = cssContent.replace(linkRegex, '/fonts/' + filename);
                } catch (e) {
                    console.error('Failed to download', link);
                }
            } else if (link.includes('topcanalizador.com')) {
                // localise image
                 let isAbs = link.includes('topcanalizador.com');
                 if(isAbs) {
                    const localPath = link.split('topcanalizador.com')[1];
                    const linkRegex = new RegExp(link.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g');
                    cssContent = cssContent.replace(linkRegex, localPath);
                 }
            }
        }
        
        // Fix font awesome and tools relative paths like ../fonts/Tools/Tools.woff
        cssContent = cssContent.replace(/url\(['"]?\.\.\/fonts\/([^/'"]+)\/([^/'"]+)['"]?\)/g, "url('/fonts/$2')");
        fs.writeFileSync(dest, cssContent);
        console.log('Modified', cssFile);
    }
    console.log('Done downloading CSS and Fonts.');
})();
