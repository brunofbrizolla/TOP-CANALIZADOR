const fs = require('fs');
const html = fs.readFileSync('top.html', 'utf8');
const start = html.indexOf('<section id="bt_bb_section69e48241868da"');
const end = html.indexOf('</section>', start) + 10;
let sectionHtml = html.substring(start, end);

// Fix the slider configuration to make it scroll by 2
sectionHtml = sectionHtml.replace('"slidesToShow": 2,', '"slidesToShow": 2,"slidesToScroll": 2,');

// The original site uses WPFC lazy loading data attributes. We need to convert the data-wpfc-original-src back to style
sectionHtml = sectionHtml.replace(/data-wpfc-original-src='(.*?)'/g, 'style="background-image:url(\'$1\')"');

// Wrap it back into an Astro component with Slick initialization that won't break Astro
const astroContent = `---
// Extracted and Fixed Section directly from original site to guarantee 100% fidelity
---
${sectionHtml}

<script is:inline>
  document.addEventListener('DOMContentLoaded', function() {
    function initSlider() {
      if (typeof window.jQuery === 'undefined' || typeof window.jQuery.fn.slick === 'undefined') {
        setTimeout(initSlider, 50);
        return;
      }
      var $ = window.jQuery;
      var $slider = $('#bt_bb_section69e48241868da .slick-slider');
      
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
      
      // Let slick read its options from the data-slick attribute, just like boldthemes does
      $slider.slick();
    }
    initSlider();
  });
</script>
`;

fs.writeFileSync('src/components/Section8.astro', astroContent);
console.log("Extraction complete!");
