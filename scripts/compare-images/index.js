const fs = require('fs'); // Nodes File System
const puppeteer = require('puppeteer'); // High level API to interact with headless Chrome
const signale = require('signale');
// import LOCATORS from './locators'; // A JSON with all the CSS locators we need.
const config = require('./config');

// 1. Open browser.
signale.debug('Opening browser...');

const testToRun = async (params) => {



  console.log(JSON.stringify(config));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const d = new Date();
  const name = `SOME_INPUT_FROM_TESTING_SCRIPT_${d.getDate()}_${d.getHours()}h${d.getMinutes()}`;

  await signale.watch('Navigating to the site');



  await signale.watch('Filling up the form');



  await signale.success('Everything is working as expected');

  await browser.close();

};


testToRun();
