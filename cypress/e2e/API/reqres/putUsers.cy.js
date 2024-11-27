/// <referance types="cypress" />

describe('API Testing', () => {
    it('Test API Update User', () => {
        cy.request('PUT', 'https://reqres.in/api/users/2')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
            })
    })
})