const chalk = require('chalk');
const signale = require('signale');

const logPoint = (someString) => {
  console.log(chalk.bold.cyanBright(someString));
};

const logFail = (someString) => {
  console.log(chalk.bold.magenta(fail));
};

const logSuccess = (string) => {
  signale.success(string);
};

const logDebug = (params) => {
  signale.debug(params);
};

module.exports = {
  logPoint,
  logFail,
  logSuccess,
  logDebug
};
