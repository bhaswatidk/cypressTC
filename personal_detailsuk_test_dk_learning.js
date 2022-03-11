describe('Test The Account Setting Page', () => {
    it('click logon links', () => {
        const homepageuk = "https://learning-qa.dk.com/uk"
        const email = "bhaswati.chaudhari@dk.com"
        const password = "bhas@1234"
        const firstname= "tests"
        const lastname="testa"
        cy.visit(homepageuk)
        cy.wait(2000);
        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(6000);
        cy.get('a[href*="/uk/log-in"]').first().click()
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(`${password}`)
        cy.get('.button').first().click()
        cy.wait(6000);
        //handling dropdown My Account 
        cy.get('.p-3 > .flex').click()
        cy.get(".py-2").click()
        cy.get('#firstName').clear().type(firstname)
        cy.get('#lastName').clear().type(lastname)
        cy.wait(2000)

        //handling dropdown country of residence static 

        cy.get('#countryOfResidence').select('United Kingdom').should('have.value','United Kingdom')
        cy.get('#role').select('Teacher').should('have.value','Teacher')
        //dropdown list 
        cy.get('#english').check().should('be.checked').and('have.value','English') // area of interest for one
        cy.get('#eyfs').check().should('be.checked').and('have.value','EYFS') //curriculum for one
        cy.get('#english').uncheck().should('not.be.checked') // area of interest
        cy.get('#eyfs').uncheck().should('not.be.checked')//curriculum
        cy.get('input[type="checkbox"]').check(['English','Maths','Science']) // multiple checkbox click area of intrest
        cy.get('input[type="checkbox"]').check(['EYFS','GCSE','EKS3'])// multiple checkbox click curriculum
        cy.get('.button').click()
        

        
        



        


    });
})