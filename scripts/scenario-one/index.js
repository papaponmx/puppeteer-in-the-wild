const fs = require('fs'); // Nodes File System
const puppeteer = require('puppeteer'); // High level API to interact with headless Chrome
const signale = require('signale');
const locators = require('./locators'); // A JSON with all the CSS locators we need.
const config = require('./config');

// 1. Open browser.

const runTest = async (params) => {
  signale.debug('Opening browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const d = new Date();
  const dateString = `${d.getDate()}_${d.getHours()}h${d.getMinutes()}`;
  const userName = `USER_FROM_TESTING_SCRIPT_${dateString}`;

  // 2. Go to the website;
  await signale.watch('Navigating to the site 🚢');
  await page.goto(LOCAL_HOST_URL);
  await signale.watch('Filling up the form 🙌');
  await signale.success('Everything is working as expected ✅');
  await browser.close();
};


runTest();
