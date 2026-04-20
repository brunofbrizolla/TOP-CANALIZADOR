import os
import re
import urllib.request
from urllib.parse import unquote

root_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\top-canalizador-astro"
public_dir = os.path.join(root_dir, "public")
src_dir = os.path.join(root_dir, "src")

path_pattern = re.compile(r'["\'](/wp-content/[^"\']+)["\']')
full_missing = set()

for root, dirs, files in os.walk(src_dir):
    for filename in files:
        if filename.endswith((".astro", ".js", ".ts", ".css")):
            file_path = os.path.join(root, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = path_pattern.findall(content)
                for match in matches:
                    clean_match = match.split('?')[0].split('#')[0]
                    local_path = os.path.join(public_dir, clean_match.lstrip('/').replace('/', os.sep))
                    if not os.path.exists(local_path):
                        full_missing.add(clean_match)

print(f"Starting download of {len(full_missing)} assets...")

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

for path in sorted(list(full_missing)):
    url = f"https://topcanalizador.com{path}"
    # Use unquote for the local path but keep the original encoding for the URL
    local_path = os.path.join(public_dir, unquote(path).lstrip('/').replace('/', os.sep))
    
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    
    try:
        print(f"Downloading {url}...")
        urllib.request.urlretrieve(url.replace(" ", "%20"), local_path)
        print(f"  Success!")
    except Exception as e:
        print(f"  Error downloading {url}: {e}")

print("Download complete!")
