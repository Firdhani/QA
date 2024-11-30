// <referance types="cypress" />

import directorypage from "../../../pom/ProyekAkhir/Dashboard/directory.cy";
import loginpage from "../../../pom/ProyekAkhir/Login/login.cy";

describe('Directory Feature', () =>  {
    it.only('Succssesfully Login and view Directory Page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.verifyLoginPage().should('have.text','Login');
        loginpage.inputUsername().type('Admin');
        loginpage.inputPassword().type('admin123');
        cy.intercept('GET','**/action-summary').as('actionSummary');
        loginpage.buttonLogin().click();
        cy.wait('@actionSummary');
        loginpage.dashboardPage().should('have.text','Dashboard');

        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0').as('employees');
        directorypage.directory().click();
        cy.wait('@employees');
        directorypage.verifyDirectoryPage().should('have.text','Directory');

        directorypage.employeeName().type('Peter');
        directorypage.listBox().contains('Peter Mac Anderson').click();

        directorypage.selectBox().eq(0).click();
        directorypage.listBox().contains('Chief Financial Officer').click();
        
        directorypage.selectBox().eq(1).click();
        directorypage.listBox().contains('New York Sales Office').click();
        
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&locationId=2&empNumber=3&jobTitleId=2').as('employeeFound');
        directorypage.buttonSearch().click();
        cy.wait('@employeeFound');
    })
}) 
