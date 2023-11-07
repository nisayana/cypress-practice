describe('Practices', () => {
    // it('Implicit assertions practice 1', () => {
    //     cy.visit('https://techglobal-training.com/frontend')
    //     cy.get('.cards').contains('Html Elements').click()
    //     cy.get('#hello_paragraph').should('be.visible')
    //     .and('have.text', 'Hello World!')
    //     .and('have.attr', 'id', 'hello_paragraph')

    //     cy.get('#testing_paragraph').should('be.visible')
    //     .and('have.text', 'I like automation testing!')
    //     .and('have.attr', 'id', 'testing_paragraph')
    // })

    // it('Implicit assertions practice 2', () => {
    //     cy.visit('https://techglobal-training.com/frontend')
    //     cy.get('.cards').contains('Html Elements').click()
    //     cy.get('#register_button').should('be.visible')
    //     .and('be.enabled')
    //     .and('have.text', 'Register')
    //     // .and('not.have.attr', 'disabled')

    //     cy.get('#signin_button').should('be.visible')
    //     .and('be.enabled')
    //     .and('have.text', 'Sign in')
    //     // .and('not.have.attr', 'disabled')
    // })

    // it('Implicit assertions practice 3', () => {
    //     cy.visit('https://techglobal-training.com/frontend')
    //     cy.get('.cards').contains('Html Elements').click()

    //     cy.get('#ordered_list_item1').should('be.visible')
    //     .and('have.text', 'Cypress')


    //     cy.get('#ordered_list_item2').should('be.visible')
    //     .and('have.text', 'Selenium Webdriver')

    //     cy.get('#ordered_list_item1')
    //         .prev().should('be.visible')
    //         .should('have.text', 'Ordered Lists') 
    //         .next().find('ordered_list_item2')
    // })

    // it('Implicit practice 4', () => {
    //     cy.visit('https://techglobal-training.com/frontend')
    //     cy.get('.cards').contains('Html Elements').click()

    //     cy.get('.is-flex h3').should('be.visible')
    //     .and('have.text', 'Links')

    //     cy.get('#facebook_link').should('be.visible')
    //     .and('have.text', 'Facebook')
    //     .and('have.attr', 'href')

    //     cy.get('#instagram_link').should('be.visible')
    //     .and('have.text', 'Instagram')
    //     .and('have.attr', 'href')
    // })

    // it('Implicit practice 5', () => {
    //     cy.visit('https://techglobal-training.com/frontend')
    //     cy.get('.cards').contains('Html Elements').click()

    //     // cy.get('#checkbox-button-group h3')
    //     cy.get('#tesla_check').should('have.text', 'Tesla')
    //     .prev()
    //     .and('be.enabled')
    //     .and('be.not.checked')
    //     .check()
    //     .and('be.checked')
    // })

    // it('Implicit practice 6', () => {
    //     cy.visit('https://techglobal-training.com/frontend')

    //     cy.get('.cards').contains('Dropdowns').click()
    //     cy.get('#product_dropdown').select('MacBook Pro 13')

    //     cy.get('#color_dropdown').select('Green')

    //     cy.get('#color_dropdown').select('Green')

    // })

    it("test cypress course", () => {
        cy.visit("https://cypress-course.vercel.app/fundamentals")
        // cy.get('.fundamentals_header__yRsdA').contains(/Testing fundamentals/i)
        cy.get(".fundamentals_header__yRsdA").should("contain", "Testing Fundamentals")
        cy.contains(/Your tests will exist in a describe block./i).should("not.be.visible")
        // cy.get(".MuiAccordionSummary-content").contains("Describe blocks").click()
        cy.get(':nth-child(1) > #panel1a-header > .MuiAccordionSummary-content').click()
        cy.contains(/Your tests will exist in a describe block./i).should("be.visible")
    })

    it.only("test form", () => {
        cy.visit("https://cypress-course.vercel.app/forms")
        cy.get(".MuiInputBase-input").type("test@email.com")
        // cy.get(".MuiInputBase-input").should("have.value", "test@email.com")
        cy.get(".MuiButton-root").click()
        
    })
})