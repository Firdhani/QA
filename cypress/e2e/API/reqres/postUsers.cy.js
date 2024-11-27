/// <referance types="cypress" />

describe('API Testing', () => {
    it('Test API Creat User', () => {
        cy.request('POST', 'https://reqres.in/api/users', {
            name: "Firdha", 
            job: "QA",
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.not.be.null
            })
    })
})