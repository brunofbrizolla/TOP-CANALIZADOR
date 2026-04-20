import os
import requests
from urllib.parse import unquote

root_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\top-canalizador-astro"
public_dir = os.path.join(root_dir, "public")

missing_urls = [
    # I'll include the ones from the audit output + I'll re-run the audit logic here to get the full list
]

import re
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

headers = {'User-Agent': 'Mozilla/5.0'}

for path in full_missing:
    url = f"https://topcanalizador.com{path}"
    # Unquote for local path creation but keep URL encoded for request
    local_path = os.path.join(public_dir, unquote(path).lstrip('/').replace('/', os.sep))
    
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    
    try:
        print(f"Downloading {url}...")
        r = requests.get(url, headers=headers, timeout=10)
        if r.status_code == 200:
            with open(local_path, 'wb') as f:
                f.write(r.content)
            print(f"  Success!")
        else:
            print(f"  Failed! Status: {r.status_code}")
    except Exception as e:
        print(f"  Error: {e}")

print("Download complete!")
