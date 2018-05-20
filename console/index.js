import chalk from 'chalk';
import signale from 'signale';

export const point = (someString) => {
  console.log(chalk.bold.cyanBright(someString));
};

export const fail = (someString) => {
  console.log(chalk.bold.magenta(fail));
};


export const logSuccess  ess = (string) => {
  signale.success(string);
}

export const logDebug = (params) => {
  signale.debug(params);
}
