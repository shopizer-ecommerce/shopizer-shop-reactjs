#!/usr/bin/env node
/**
 * Browser Error Capture Tool
 * 
 * Launches a headless browser, navigates to a URL, and captures:
 * - Console errors/warnings
 * - Network failures (4xx, 5xx)
 * - Uncaught JS exceptions (page crashes)
 * 
 * Usage:
 *   node capture-errors.js [url] [--wait ms]
 * 
 * Examples:
 *   node capture-errors.js                          # defaults to http://localhost:3000
 *   node capture-errors.js http://localhost:3000/wishlist
 *   node capture-errors.js http://localhost:3000 --wait 5000
 */

const { chromium } = require('playwright');

const args = process.argv.slice(2);
const url = args.find(a => a.startsWith('http')) || 'http://localhost:3000';
const waitIdx = args.indexOf('--wait');
const waitMs = waitIdx !== -1 ? parseInt(args[waitIdx + 1]) : 3000;

(async () => {
  const consoleErrors = [];
  const networkErrors = [];
  const pageErrors = [];

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Capture console errors and warnings
  page.on('console', msg => {
    const type = msg.type();
    if (type === 'error' || type === 'warning') {
      consoleErrors.push({
        type,
        text: msg.text(),
        location: msg.location()
      });
    }
  });

  // Capture uncaught exceptions
  page.on('pageerror', error => {
    pageErrors.push({
      message: error.message,
      stack: error.stack
    });
  });

  // Capture network failures
  page.on('response', response => {
    const status = response.status();
    if (status >= 400) {
      networkErrors.push({
        url: response.url(),
        status,
        statusText: response.statusText()
      });
    }
  });

  page.on('requestfailed', request => {
    networkErrors.push({
      url: request.url(),
      status: 0,
      statusText: request.failure()?.errorText || 'Request failed'
    });
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  } catch (e) {
    pageErrors.push({ message: `Navigation failed: ${e.message}`, stack: '' });
  }

  // Wait for async errors
  await page.waitForTimeout(waitMs);

  await browser.close();

  // Output results as JSON
  const result = {
    url,
    timestamp: new Date().toISOString(),
    summary: {
      consoleErrors: consoleErrors.length,
      networkErrors: networkErrors.length,
      pageErrors: pageErrors.length,
      totalErrors: consoleErrors.length + networkErrors.length + pageErrors.length
    },
    pageErrors,
    consoleErrors,
    networkErrors
  };

  console.log(JSON.stringify(result, null, 2));

  process.exit(result.summary.totalErrors > 0 ? 1 : 0);
})();
