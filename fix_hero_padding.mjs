import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, 'src', 'pages');

const pagesToFix = [
    'canalizacao-comercial.astro',
    'canalizacao-residencial.astro',
    'deteccao-de-fugas.astro',
    'limpeza-de-fossas.astro',
    'reparacoes.astro',
    'servicos-industriais.astro',
    'urgencias-24-7.astro'
];

for (const p of pagesToFix) {
    const filePath = path.join(pagesDir, p);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${p}`);
        continue;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;

    // Fix padding in the hero section. Note that other pages likely have `padding: 190px 0 180px !important;`
    // We match the exact regex to find the background-image and padding inline style.
    const paddingRegex = /padding:\s*190px\s+0\s+(180|280)px\s+!important;/g;
    if (paddingRegex.test(content)) {
        content = content.replace(paddingRegex, 'padding: 130px 0 310px !important;');
        hasChanges = true;
    } else {
        // Fallback if they have other padding
        const fuzzyPaddingRegex = /padding:\s*\d+px\s+0\s+\d+px\s+!important;/g;
        // Limit to first occurrence to only target the hero section
        let count = 0;
        content = content.replace(fuzzyPaddingRegex, (match) => {
            count++;
            if (count === 1) {
                console.log(`Fuzzy replaced padding in ${p}: ${match}`);
                return 'padding: 130px 0 310px !important;';
            }
            return match;
        });
        if (count > 0) hasChanges = true;
    }

    // Fix the separator
    // Old: <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
    // New: <div class="bt_bb_separator bt_bb_border_style_none" style="height: 40px;"></div>
    // Ensure we only replace the one right before the "Homepage Standard Button Replication"
    // We can do it by finding the button HTML block.
    
    // First, let's normalize the spacer replacement explicitly if they all share the exact structure
    const spacerSearch = /<div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"><\/div>\s*(?:<!-- Homepage Standard Button Replication -->)?\s*<div class="bt_bb_button/g;
    
    if (spacerSearch.test(content)) {
        content = content.replace(spacerSearch, '<div class="bt_bb_separator bt_bb_border_style_none" style="height: 40px;"></div>\n                            \n                            <!-- Homepage Standard Button Replication -->\n                            <div class="bt_bb_button');
        hasChanges = true;
    }

    // Also some pages might have it differently formatted. Let's do a reliable replace over the headline block.
    
    if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${p}`);
    } else {
        console.log(`No changes made to ${p} (maybe already fixed or pattern didn't match).`);
    }
}
