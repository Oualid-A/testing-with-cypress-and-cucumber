import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';

Given('I open login page', () => {
  // cy.visit('http://zero.webappsecurity.com/login.html');
  LoginPage.visitLoginPage()
});

// When('I submit login', () => {
//   // cy.get('#user_login').type('username');
//   LoginPage.fillUsername('username'); // add parameterized username

//   // cy.get('#user_password').type('password');
//   LoginPage.fillPassword('password'); // add parameterized password
  
//   // cy.get('input[name="submit"]').click();
//   LoginPage.clickSubmitButton();
// });

When('I fill username with {string}', username => {
  LoginPage.fillUsername(username);
})

When('I fill password with {string}', password => {
  LoginPage.fillPassword(password);
})

When('I click submit login', () => {
  LoginPage.clickSubmitButton();
})
// Then step: Verify homepage elements
Then('Display home page', () => {
  cy.get('#account_summary_tab').should('be.visible');
});

Then('Display error message', () => {
  LoginPage.shouldShowErrorMessage();
});