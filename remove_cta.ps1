$files = Get-ChildItem src/pages/*.astro
foreach ($file in $files) {
    if ($file.Name -eq "index.astro") { continue }
    $content = Get-Content $file.FullName -Raw
    # Multi-line match for CTA section
    $newContent = $content -replace '(?s)\s+<!-- CTA Banner -->\s+<section id="bt_bb_section_cta".*?</section>', "`n`n"
    $newContent | Set-Content $file.FullName
}
