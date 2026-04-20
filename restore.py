import re

with open('src/components/Section6.astro', 'r', encoding='utf-8') as f:
    text = f.read()

# Nuke everything starting from '<!-- CLEANED 24/7 ROW -->' down to the end
text = re.sub(r'<!-- CLEANED 24/7 ROW -->.*', '', text, flags=re.DOTALL)

# Also remove any leftover <!-- 24/7 Row --> if it appended to the bottom
text = re.sub(r'<!-- 24/7 Row -->.*', '', text, flags=re.DOTALL)

# Re-add the proper WP structure
wp_row = '''        <!-- 24/7 Row -->
        <div class="bt_bb_row">
          <div class="bt_bb_row_holder">
            <div class="bt_bb_column col-xxl-4 col-xl-4 bt_bb_vertical_align_top bt_bb_align_left bt_bb_padding_normal bt_bb_animation_fade_in animate" data-width="4">
              <div class="bt_bb_column_content">
                <div class="bt_bb_column_content_inner">
                  <header class="bt_bb_headline bt_bb_color_scheme_5 bt_bb_dash_none bt_bb_superheadline bt_bb_size_large bt_bb_align_inherit" style="; --headline-primary-color:#252525; --headline-secondary-color:#51acfb;">
                    <h3><span class="bt_bb_headline_superheadline">O QUE NÓS OFERECEMOS</span><span class="bt_bb_headline_content"><span>Serviço de Emergência <b> 24/7 </b></span></span></h3>
                  </header>
                  <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                </div>
              </div>
            </div>
            <div class="bt_bb_column col-xxl-4 col-xl-4 bt_bb_vertical_align_top bt_bb_align_left bt_bb_padding_double bt_bb_animation_fade_in animate" data-width="4">
              <div class="bt_bb_column_content">
                <div class="bt_bb_column_content_inner">
                  <div class="bt_bb_service bt_bb_color_scheme_3 bt_bb_style_borderless bt_bb_size_xlarge bt_bb_shape_circle bt_bb_align_left" style="; --service-primary-color:#51acfb; --service-secondary-color:#252525;">
                    <span data-ico-tools="" class="bt_bb_icon_holder"></span>
                    <div class="bt_bb_service_content">
                      <div class="bt_bb_service_content_title">SERVIÇO RÁPIDO &amp; CONFIÁVEL</div>
                      <div class="bt_bb_service_content_text">Pode contar connosco, temos todos os meios para lhe oferecer soluções de alta qualidade em tempo recorde!</div>
                    </div>
                  </div>
                  <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                  <div class="bt_bb_service bt_bb_color_scheme_3 bt_bb_style_borderless bt_bb_size_xlarge bt_bb_shape_circle bt_bb_align_left" style="; --service-primary-color:#51acfb; --service-secondary-color:#252525;">
                    <span data-ico-tools="" class="bt_bb_icon_holder"></span>
                    <div class="bt_bb_service_content">
                      <div class="bt_bb_service_content_title">SERVIÇOS DE EMERGÊNCIA</div>
                      <div class="bt_bb_service_content_text">Ligue-nos, vamos resolver os seus problemas num piscar de olhos!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bt_bb_column col-xxl-4 col-xl-4 bt_bb_vertical_align_top bt_bb_align_left bt_bb_padding_double bt_bb_animation_fade_in animate" data-width="4">
              <div class="bt_bb_column_content">
                <div class="bt_bb_column_content_inner">
                  <div class="bt_bb_service bt_bb_color_scheme_3 bt_bb_style_borderless bt_bb_size_xlarge bt_bb_shape_circle bt_bb_align_left" style="; --service-primary-color:#51acfb; --service-secondary-color:#252525;">
                    <span data-ico-tools="" class="bt_bb_icon_holder"></span>
                    <div class="bt_bb_service_content">
                      <div class="bt_bb_service_content_title">PESSOAL QUALIFICADO &amp; TREINADO</div>
                      <div class="bt_bb_service_content_text">Contamos com mais de 15 anos de experiência no mercado, os nossos canalizadores são extremamente profissionais.</div>
                    </div>
                  </div>
                  <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_normal"></div>
                  <div class="bt_bb_service bt_bb_color_scheme_3 bt_bb_style_borderless bt_bb_size_xlarge bt_bb_shape_circle bt_bb_align_left" style="; --service-primary-color:#51acfb; --service-secondary-color:#252525;">
                    <span data-ico-tools="" class="bt_bb_icon_holder"></span>
                    <div class="bt_bb_service_content">
                      <div class="bt_bb_service_content_title">1 ANO DE GARANTIA</div>
                      <div class="bt_bb_service_content_text">Oferecemos 1 ano de garantia a todos os equipamentos montados por nós.</div>
                    </div>
                  </div>
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
    f.write(text.strip() + '\n' + wp_row)

print("Restored successfully!")
