const { defineConfig, test, expect } = require('@playwright/test');
const { pollElectionResults } = require('./flows');

export default defineConfig({
    use: {
      screenshot: 'only-on-failure',
    }
});

test.describe('landing page', () => {
    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== testInfo.expectedStatus) {
         const screenshotPath = testInfo.outputPath(`failure.png`);
        testInfo.attachments.push({ name: 'screenshot', path: 
        screenshotPath, contentType: 'image/png' });
        await page.screenshot({ path: screenshotPath, timeout: 5000 });
     }
    });

    test('asserts page loads with election boxes', async ({ page }) => {
        test.slow();
        await pollElectionResults(page);
    });
});