import os
import re

src_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\top-canalizador-astro\src"

# Patterns to replace (both with and without https:, and with double slashes)
patterns = [
    (re.compile(r'https://topcanalizador\.com/wp-content'), '/wp-content'),
    (re.compile(r'http://topcanalizador\.com/wp-content'), '/wp-content'),
    (re.compile(r'//topcanalizador\.com/wp-content'), '/wp-content'),
]

def localize_assets(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for pattern, replacement in patterns:
        new_content = pattern.sub(replacement, new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Recurse through all files in src
for root, dirs, files in os.walk(src_dir):
    for filename in files:
        if filename.endswith((".astro", ".js", ".ts", ".css")):
            file_path = os.path.join(root, filename)
            if localize_assets(file_path):
                print(f"Localized assets in {os.path.relpath(file_path, src_dir)}")

print("Asset localization complete!")
