// This script should automate shit, in order to run it.
// You should have the development server running.
// You can start it with
// yarn start
// node selenium/index.js
const selenium = require('selenium-webdriver');

const By = selenium.By;
const driver = new selenium.Builder()
.forBrowser('chrome')
.build();

driver.get('http://localhost:3000');


const LOCATORS = {
  roleNavButton: By.xpath(`//*[@id="app-navigation"]/a[2]`),
  addRoleButton: By.css('#root > div > div > main > div > button'),
  addRoleInput: By.css('form input'),
  addRoleSubmitButton: By.css('#root > div > div > main > div > form > button'),
}

const ROLES = {

}

const ROLES_LIST = [
  'Developer',
  // 'Pimp',
  'Son',
  'Human',
]

const addRole = (role) => {
  driver.findElement(LOCATORS.addRoleInput).sendKeys(role);
  driver.findElement(LOCATORS.addRoleSubmitButton).click();
}

driver.get('http://localhost:3000/roles/add');
ROLES_LIST.filter(role => {
  addRole(role);
});
