const fs = require('fs').promises;
const pw = require('playwright');

(async () => {
  const browser = await pw.chromium.launch()
  const context = browser.newContext()
  const page = await (await context).newPage()
  await page.goto('http://localhost:3000')
  const pdf = await page.pdf({ format: 'A4', margin: { left: 20, right: 20}, printBackground: true })
  await fs.writeFile('public/cv.pdf', pdf)
  await browser.close()
})();
