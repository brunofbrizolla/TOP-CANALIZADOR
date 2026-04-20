import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle2' });
  
  // Wait a bit for sliders to initialize
  await new Promise(r => setTimeout(r, 2000));
  
  // Scroll to section 8
  const el = await page.$('#bt_bb_section69e3d2603e45a');
  await page.evaluate((el) => {
    el.scrollIntoView();
  }, el);
  
  await new Promise(r => setTimeout(r, 1000));
  
  await el.screenshot({ path: 'section8_local.png' });
  
  await browser.close();
})();
