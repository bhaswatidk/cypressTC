
 const homepageuk = 'https://learning-qa.dk.com/uk'
describe('Test The Account Setting Page', () => {
    it('click logon links', () => {
        const email = "bhaswati.chaudhari@dk.com"
        const password = "bhas@1234"
        const firstname= "tests"
        const lastname="testa"
        cy.visit(homepageuk)
        cy.wait(2000);
        cy.get('#onetrust-accept-btn-handler').click() //accept cookies
        cy.wait(6000);
        cy.get('a[href*="/uk/log-in"]').first().click()
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(`${password}`)
        cy.get('.button').first().click()
        cy.wait(6000);
        //handling dropdown My Account 
        cy.get('.p-3 > .flex').click()
        cy.get(".py-2").click()
        cy.get(".m-0 > :nth-child(2) > button").click()
        cy.get("#password").click().type("bhas@1234")
        cy.get(".button-dark").click()
    })})