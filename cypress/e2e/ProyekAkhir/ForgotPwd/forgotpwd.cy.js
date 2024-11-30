/// <referance types="cypress" />

import forgotpwdpage from "../../../pom/ProyekAkhir/ForgotPwd/forgotpwd.cy";
import loginpage from "../../../pom/ProyekAkhir/Login/login.cy";

describe('Forgot Password Feature', () =>  {
    it.only('Forgot with input Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        forgotpwdpage.ForgotPwd().click();
        forgotpwdpage.verifyforgotpwd().should('have.text','Reset Password');
        forgotpwdpage.inputUsername().type('Admin');
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages')
        forgotpwdpage.buttonReset().click();
        cy.wait('@messages')
        forgotpwdpage.resetSuccessPage().should('have.text','Reset Password link sent successfully');
    }) 
})


describe('Forgot Password Feature', () =>  {
    it.only('Forgot without input Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        forgotpwdpage.ForgotPwd().click();
        forgotpwdpage.verifyforgotpwd().should('have.text','Reset Password');
        forgotpwdpage.inputUsername().clear();
        forgotpwdpage.buttonReset().click();
        forgotpwdpage.requiredPage().should('have.text','Required');
    })
})

    
    describe('Cancel Forgot Password', () =>  {
        it.only('Forgot without input Username', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            forgotpwdpage.ForgotPwd().click();
            forgotpwdpage.verifyforgotpwd().should('have.text','Reset Password');
            forgotpwdpage.buttonCancel().click();
            loginpage.verifyLoginPage().should('have.text','Login');
        })
})