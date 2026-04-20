import os
import re

pages_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\top-canalizador-astro\src\pages"

def clean_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove imports
    content = re.sub(r"import Header from '\.\./components/Header\.astro';\n?", "", content)
    content = re.sub(r"import Footer from '\.\./components/Footer\.astro';\n?", "", content)
    content = re.sub(r"import CookieConsent from '\.\./components/CookieConsent\.astro';\n?", "", content)

    # Remove component calls
    # Handle variations like <Header />, <Header/>, <Footer  /> etc.
    content = re.sub(r"<Header\s*/>\n?", "", content)
    content = re.sub(r"<Footer\s*/>\n?", "", content)
    content = re.sub(r"<CookieConsent\s*/>\n?", "", content)

    # Remove redundant btPageWrap if it exists
    # We look for <div class="btPageWrap" id="top"> and its corresponding closing </div>
    # Usually it's at the start and end of the layout body
    
    # Simple replacement for the opening tag
    content = re.sub(r"<div class=\"btPageWrap\" id=\"top\">\n?", "", content)
    
    # Finding the last </div> before </Layout> is tricky with Regex if there are nested divs.
    # But in these files, they were usually the last elements.
    # I'll try to find </div> that is followed by </Layout> (with optional whitespace)
    content = re.sub(r"</div>\s*</Layout>", "</Layout>", content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

for filename in os.listdir(pages_dir):
    if filename.endswith(".astro"):
        print(f"Cleaning {filename}...")
        clean_file(os.path.join(pages_dir, filename))

print("Done!")
