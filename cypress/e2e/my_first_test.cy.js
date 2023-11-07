describe("My First Test", () => { // name of the suite
    it('test1 - verify title', () => { // representing one test
        //steps
        // to launch an app
        cy.visit("https://techglobal-training.com/");
        cy.title().should("eq", "Techglobal Training | Home")
    })

    it('test2 - verify neg test', () => { // representing one test
        //steps
        // to launch an app
        cy.visit("https://techglobal-training.com/");
        cy.title().should("eq", "Tech Global Training Home")
    })
})