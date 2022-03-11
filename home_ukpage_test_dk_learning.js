
describe('MyTestSuite',function()
{
    it('Verify Title of the Page-positive',function(){

    cy.visit('https://learning-qa.dk.com/uk')
    cy.title().should('eq','DK learning')

    })
    it('Verify Title of the Page-nagitive',function(){

        cy.visit('https://learning-qa.dk.com/uk')
        cy.title().should('eq','DK learn')
    })
    

})