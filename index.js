const puppeteer = require('puppeteer');
const config = require('./config');

const {
  url,
  msisdn,
 } = config;

const selector = {
  msisdninput: '',
}

const goToHomeUrl = async () => {
    const browser = await puppeteer.launch();
    const page = browser.newPage();

    await page.goto(url);
}


const sendMsisdn = async () => {
  // await page

}

const checkTelcelFooter = async () => {

}

const getOpts = async () => {

}
