export default class loginpage{
    static verifyLoginPage(){
        return cy.get('h5').contains('Login'); 
    }

    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static inputPassword(){
        return cy.get('[name="password"]');
    }

    static buttonLogin(){
        return cy.get('[type="submit"]');
    }

    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }

    static invalid(){
        return cy.get('p').contains('Invalid credentials');
    }
    
    static requiredPage(){
        return cy.get('span').contains('Required');
    }
}