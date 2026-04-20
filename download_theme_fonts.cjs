const fs = require('fs');
const path = require('path');
const https = require('https');

const fontsToDownload = [
    'Tools/Tools.ttf',
    'Tools/Tools.woff',
    'Essential/Essential.ttf',
    'Essential/Essential.woff',
    'Plumber/Plumber.ttf',
    'Plumber/Plumber.woff'
];

const fontsDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\top-canalizador\\public\\fonts';

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, function(response) {
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
    for (const font of fontsToDownload) {
        const url = `https://topcanalizador.com/wp-content/themes/prohauz/fonts/${font}`;
        const filename = path.basename(font);
        try {
            await download(url, path.join(fontsDir, filename));
            console.log('Downloaded', filename);
        } catch(e) {
            console.error('Error downloading', filename);
        }
    }
    console.log('Done downloading theme fonts.');
})();
