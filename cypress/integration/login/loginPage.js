const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME_INPUT = '#user_login';
const PASSWORD_INPUT = '#user_password';
const SUBMIT_BUTTON = 'input[name="submit"]';
const ERROR_MESSAGE = '.alert-error';

export default class LoginPage {
  
    // Visit the login page
    static visitLoginPage() {
      cy.visit(URL);
    }

    // Fill username
    static fillUsername(username) {
      cy.get(USERNAME_INPUT).type(username);
    }
    
    // Fill password
    static fillPassword(password) {
      cy.get(PASSWORD_INPUT).type(password);
    }
    
    // Click submit button
    static clickSubmitButton() {
      cy.get(SUBMIT_BUTTON).click();
    }

    static shouldShowErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
    }
}