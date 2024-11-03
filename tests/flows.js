module.exports = { pollElectionResults };
const { expect } = require('@playwright/test');

async function pollElectionResults (page) {
  // TODO: do better basic auth later
  let user = '';
  let pass = '';
  await page.setExtraHTTPHeaders({
      Authorization: 'Basic '+btoa(`${user}:${pass}`)
  })
  await page.goto(`https://www3.theepochtimes.com`);
  for (let i = 0; i < 3; i++) {
      const res = await page.waitForResponse('**/gapi/posts/election*');
      await expect(res.status()).toEqual(200);
      await expect(await res.json()).toHaveProperty('races');
  }
}