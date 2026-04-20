import os

with open('src/components/Section6.astro', 'r', encoding='utf-8') as f:
    text = f.read()

prefix, body = text.split('<!-- Stats Row -->', 1)

new_body = '''<!-- CLEANED 24/7 ROW -->
        <div class="max-w-7xl mx-auto px-4 py-8 lg:py-16 relative z-10 w-full" id="tc-cleaned-section6-row3">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <!-- COLUMN 1: Headline -->
            <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span class="text-[13px] font-bold text-gray-400 uppercase tracking-wide mb-2">O QUE NÓS OFERECEMOS</span>
              <h3 class="text-4xl lg:text-5xl font-extrabold text-[#252525] leading-tight m-0 p-0">
                Serviço de Emergência <br class="hidden lg:block"> <span class="text-[#51acfb]">24/7</span>
              </h3>
            </div>

            <!-- COLUMN 2: Services 1 & 2 -->
            <div class="flex flex-col gap-8 lg:gap-12">
              <!-- Service 1 -->
              <div class="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
                <span data-ico-tools="" class="text-[#51acfb] text-5xl leading-none font-normal"></span>
                <div>
                  <h4 class="text-[13px] font-extrabold text-[#252525] uppercase mb-2">SERVIÇO RÁPIDO & CONFIÁVEL</h4>
                  <p class="text-sm text-gray-600 m-0 leading-relaxed">Pode contar connosco, temos todos os meios para lhe oferecer soluções de alta qualidade em tempo recorde!</p>
                </div>
              </div>
              <!-- Service 2 -->
              <div class="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
                <span data-ico-tools="" class="text-[#51acfb] text-5xl leading-none font-normal"></span>
                <div>
                  <h4 class="text-[13px] font-extrabold text-[#252525] uppercase mb-2">SERVIÇOS DE EMERGÊNCIA</h4>
                  <p class="text-sm text-gray-600 m-0 leading-relaxed">Ligue-nos, vamos resolver os seus problemas num piscar de olhos!</p>
                </div>
              </div>
            </div>

            <!-- COLUMN 3: Services 3 & 4 -->
            <div class="flex flex-col gap-8 lg:gap-12">
              <!-- Service 3 -->
              <div class="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
                <span data-ico-tools="" class="text-[#51acfb] text-5xl leading-none font-normal"></span>
                <div>
                  <h4 class="text-[13px] font-extrabold text-[#252525] uppercase mb-2">PESSOAL QUALIFICADO & TREINADO</h4>
                  <p class="text-sm text-gray-600 m-0 leading-relaxed">Contamos com mais de 15 anos de experiência no mercado, os nossos canalizadores são extremamente profissionais.</p>
                </div>
              </div>
              <!-- Service 4 -->
              <div class="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
                <span data-ico-tools="" class="text-[#51acfb] text-5xl leading-none font-normal"></span>
                <div>
                  <h4 class="text-[13px] font-extrabold text-[#252525] uppercase mb-2">1 ANO DE GARANTIA</h4>
                  <p class="text-sm text-gray-600 m-0 leading-relaxed">Oferecemos 1 ano de garantia a todos os equipamentos montados por nós.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script is:inline>
(function() {
  function fixOfertaCards() {
    if (window.innerWidth > 991) return;
    const section = document.getElementById('bt_bb_section69e3d26039b28');
    if (!section) return;
    const firstRow = section.querySelector('.bt_bb_cell_inner > .bt_bb_row:first-child');
    if (!firstRow) return;
    const rowHolder = firstRow.querySelector('.bt_bb_row_holder');
    if (rowHolder) {
      rowHolder.style.setProperty('display', 'flex', 'important');
      rowHolder.style.setProperty('flex-direction', 'column', 'important');
      rowHolder.style.setProperty('flex-wrap', 'wrap', 'important');
      rowHolder.style.setProperty('width', '100%', 'important');
    }
    const cards = firstRow.querySelectorAll('.bt_bb_column');
    cards.forEach(function(card) {
      card.style.setProperty('flex', '0 0 100%', 'important');
      card.style.setProperty('max-width', '100%', 'important');
      card.style.setProperty('width', '100%', 'important');
      card.style.setProperty('min-height', '280px', 'important');
      card.style.removeProperty('aspect-ratio');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixOfertaCards);
  } else {
    fixOfertaCards();
  }
  window.addEventListener('load', fixOfertaCards);
  window.addEventListener('resize', fixOfertaCards);
})();
</script>
'''

with open('src/components/Section6.astro', 'w', encoding='utf-8') as f:
    f.write(prefix + new_body)

print('Successfully cleaned and refactored Row 3 in Section 6!')
