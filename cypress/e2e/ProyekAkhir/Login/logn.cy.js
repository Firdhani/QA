/// <referance types="cypress" />

import loginpage from "../../../pom/ProyekAkhir/Login/login.cy";

describe('Login Feature', () =>  {
    it.only('Login with Valid Credentials', () => {
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
    it.only('Login with Invalid Username and Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admina');
        loginpage.inputPassword().type('admin1234');
        loginpage.buttonLogin().click();
        loginpage.invalid().should('have.text','Invalid credentials');
    }) 
})


describe('Login Feature', () =>  {
    it.only('Login with Sensitve Case', () => {
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
    it.only('Login with Invalid Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admina');
        loginpage.inputPassword().type('admin123');
        loginpage.buttonLogin().click();
        loginpage.invalid().should('have.text','Invalid credentials');
    }) 
})


describe('Login Feature', () =>  {
    it.only('Login with Invalid Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admin');
        loginpage.inputPassword().type('admin1234');
        loginpage.buttonLogin().click();
        loginpage.invalid().should('have.text','Invalid credentials');
    }) 
})


describe('Login Feature', () =>  {
    it.only('Login with Required Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admin');
        loginpage.inputPassword().clear();
        loginpage.buttonLogin().click();
        loginpage.requiredPage().should('have.text','Required');
    }) 
})