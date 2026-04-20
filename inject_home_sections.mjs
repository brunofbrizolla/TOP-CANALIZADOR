import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, 'src', 'pages');

const pagesToFix = [
    'canalizacao-comercial.astro',
    'canalizacao-residencial.astro',
    'desentupimentos.astro',
    'deteccao-de-fugas.astro',
    'limpeza-de-fossas.astro',
    'reparacoes.astro',
    'servicos-industriais.astro',
    'urgencias-24-7.astro'
];

const importsToAdd = `
import Section8 from '../components/Section8.astro';
import Section9 from '../components/Section9.astro';
import Section10 from '../components/Section10.astro';
import Section11 from '../components/Section11.astro';
import WhoWeAre from '../components/WhoWeAre.astro';
`;

const componentsToInject = `
  <Section8 />
  <Section9 />
  <Section10 />
  <Section11 />
  <WhoWeAre />
`;

for (const p of pagesToFix) {
    const filePath = path.join(pagesDir, p);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${p}`);
        continue;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;

    // 1. Add imports if not present
    if (!content.includes(`import Section8 from`)) {
        // Find the second `---`
        const frontmatterEndIndex = content.indexOf('---', 3);
        if (frontmatterEndIndex !== -1) {
            content = content.slice(0, frontmatterEndIndex) + importsToAdd + content.slice(frontmatterEndIndex);
            hasChanges = true;
        }
    }

    // 2. Add components right before <Footer />
    if (!content.includes(`<Section8 />`)) {
        content = content.replace('<Footer />', componentsToInject + '\n  <Footer />');
        hasChanges = true;
    }
    
    if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Injected sections to ${p}`);
    } else {
        console.log(`No changes made to ${p} (already injected).`);
    }
}
