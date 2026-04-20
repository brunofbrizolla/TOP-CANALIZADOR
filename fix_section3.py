import re

with open('src/components/Section3.astro', 'r', encoding='utf-8') as f:
    html = f.read()

pattern = re.compile(r'<div class="bt_bb_column_inner col-xxl-6 col-xl-6[^"]*" data-width="6" data-bt-override-class="\{\}"><div class="bt_bb_column_inner_content"><div class="bt_bb_column_inner_content_inner"><div class="bt_bb_image.*?</div><div class="bt_bb_separator.*?</div></div></div></div>')

new_html = pattern.sub('', html)
new_html = new_html.replace('col-xxl-6 col-xl-6', 'col-xxl-12 col-xl-12').replace('data-width="6"', 'data-width="12"')

with open('src/components/Section3.astro', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("success")
