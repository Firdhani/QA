export default class forgotpwdpage{
    static ForgotPwd(){
        return cy.get('p').contains('Forgot your password?');
    }

    static verifyforgotpwd(){
        return cy.get('h6').contains('Reset Password'); 
    }

    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static buttonReset(){
        return cy.get('[type="submit"]');
    }

    static resetSuccessPage(){
        return cy.get('h6').contains('Reset Password link sent successfully');
    }

    static buttonCancel(){
        return cy.get('[type="button"]');
    }
    
    static requiredPage(){
        return cy.get('span').contains('Required');
    }
}