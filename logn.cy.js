/// <referance types="cypress" />

describe('Login Feature', () =>  {
    it('User Login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept('GET','**/action-summary').as('actionSummary');
        cy.get('[type="submit"]').click();
        cy.wait('@actionSummary');
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
    }) 
})


describe('Login Feature', () =>  {
    it('User Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admina');
        cy.get('[name="password"]').type('admin1234');
        cy.get('[type="submit"]').click();
        cy.get('p').contains('Invalid credentials').should('have.text','Invalid credentials');
    }) 
})


describe('Login Feature', () =>  {
    it('User Login with sensitve case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept('GET','**/action-summary').as('actionSummary');
        cy.get('[type="submit"]').click();
        cy.wait('@actionSummary');
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
    }) 
})


describe('Login Feature', () =>  {
    it('User Login with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin1234');
        cy.get('[type="submit"]').click();
        cy.get('p').contains('Invalid credentials').should('have.text','Invalid credentials');
    }) 
})


describe('Login Feature', () =>  {
    it('User Login with Required', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('span').contains('Required').should('have.text','Required');
    }) 
})
