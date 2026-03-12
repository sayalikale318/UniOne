const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  await page.goto('http://localhost:5173/UniOne/');
  
  // Wait for the navbar to be rendered
  await page.waitForSelector('.navbar');

  // get bounding boxes
  const boxes = await page.evaluate(() => {
    const brand = document.querySelector('.navbar__brand').getBoundingClientRect();
    const links = document.querySelector('.navbar__links').getBoundingClientRect();
    const actions = document.querySelector('.navbar__actions').getBoundingClientRect();
    const navbar = document.querySelector('.navbar').getBoundingClientRect();
    const wordmark = document.querySelector('.navbar__wordmark').getBoundingClientRect();
    const img = document.querySelector('.navbar__logo-img').getBoundingClientRect();
    return {
      navbar: { width: navbar.width, left: navbar.left },
      brand: { width: brand.width, left: brand.left, textWidth: wordmark.width, imgWidth: img.width },
      links: { width: links.width, left: links.left },
      actions: { width: actions.width, left: actions.left },
    };
  });

  console.log(boxes);
  await browser.close();
})();
