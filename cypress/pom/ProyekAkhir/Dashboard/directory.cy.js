export default class directorypage{
    static directory(){
        return cy.get('span').contains('Directory');
    }

    static verifyDirectoryPage(){
        return cy.get('h6').contains('Directory'); 
    }

    static selectBox(){
        return cy.get('.oxd-select-text-input');
    }

    static listBox(){
        return cy.get('[role="listbox"]');
    }

    static employeeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }
    
    static buttonSearch(){
        return cy.get('[type="submit"]'); 
    }
}