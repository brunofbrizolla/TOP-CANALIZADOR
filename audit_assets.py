import os
import re

# Paths
root_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\top-canalizador-astro"
src_dir = os.path.join(root_dir, "src")
public_dir = os.path.join(root_dir, "public")

# Regex to find paths starting with /wp-content/
path_pattern = re.compile(r'["\'](/wp-content/[^"\']+)["\']')

missing_files = set()
found_files = set()

for root, dirs, files in os.walk(src_dir):
    for filename in files:
        if filename.endswith((".astro", ".js", ".ts", ".css")):
            file_path = os.path.join(root, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = path_pattern.findall(content)
                for match in matches:
                    # Clean up URL params if any
                    clean_match = match.split('?')[0].split('#')[0]
                    # Convert to local OS path
                    local_path = os.path.join(public_dir, clean_match.lstrip('/').replace('/', os.sep))
                    
                    if not os.path.exists(local_path):
                        missing_files.add(clean_match)
                    else:
                        found_files.add(clean_match)

print(f"Checking assets... Found: {len(found_files)}, Missing: {len(missing_files)}")

if missing_files:
    print("\n--- MISSING ASSETS (You need to download these) ---")
    for m in sorted(missing_files):
        print(f"https://topcanalizador.com{m}")
else:
    print("\nAll wp-content assets found locally!")
