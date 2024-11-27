/// <referance types="cypress" />

import loginpage from "../../../pom/Login/login.cy";

describe('Login Feature', () =>  {
    it.only('User Login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admin');
        loginpage.inputPassword().type('admin123');
        cy.intercept('GET','**/action-summary').as('actionSummary');
        loginpage.buttonLogin().click();
        cy.wait('@actionSummary');
        loginpage.dashboardPage().should('have.text','Dashboard');
    }) 
})


describe('Login Feature', () =>  {
    it.only('User Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admina');
        loginpage.inputPassword().type('admin1234');
        loginpage.buttonLogin().click();
        loginpage.invalid().should('have.text','Invalid credentials');
    }) 
})


describe('Login Feature', () =>  {
    it.only('User Login with sensitve case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('admin');
        loginpage.inputPassword().type('admin123');
        cy.intercept('GET','**/action-summary').as('actionSummary');
        loginpage.buttonLogin().click();
        cy.wait('@actionSummary');
        loginpage.dashboardPage().should('have.text','Dashboard');
    }) 
})


describe('Login Feature', () =>  {
    it.only('User Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admin');
        loginpage.inputPassword().type('admin1234');
        loginpage.buttonLogin().click();
        loginpage.invalid().should('have.text','Invalid credentials');
    }) 
})


describe('Login Feature', () =>  {
    it.only('User Login with Required', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admin');
        loginpage.inputPassword().clear();
        loginpage.buttonLogin().click();
        loginpage.requiredPage().should('have.text','Required');
    }) 
})