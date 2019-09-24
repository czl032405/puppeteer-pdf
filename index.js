const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://jandan.net/pic", { waitUntil: "networkidle2" });
  await page.pdf({ path: "example.pdf" });

  await browser.close();
})();
