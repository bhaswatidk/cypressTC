
describe('Launch Home Page', () => {
    it('successfully loads DK learning application', () => {
        cy.visit('homepageuk')
        cy.wait(4000);
        cy.get('#onetrust-accept-btn-handler').click() // accept cookies
    })
})

describe('Test The logon Navigation', () => {
    it('click logon links', () => {
        const email = "bhaswati.chaudhari@dk.com"
        const password = "bhas@1234"
        cy.visit(homepageuk)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(4000);
        cy.get('a[href*="/uk/log-in"]').first().click()
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(`${password}`)
        cy.get('.button').first().click()
        cy.wait(4000)
        
    })
})
describe('Test The logout Navigation', () => {
   it('click logout link',() => {
        cy.get('.p-3').click()
        cy.get('.absolute > .py-1').click()




    })
})
