describe("Assertions demo", () => {
    it("Implicit assertions", () => {
        cy.visit("https://techglobal-training.com/frontend")
        /*
        for implicit assertions we use "should" and "and"
        verify url
        url should include
        cy.url().should("include", "techglobal-training.com")
        exactly equal to the url
        cy.url().should("eq", "https://techglobal-training.com/frontend")
        if url contains "techglobal"
        cy.url().should("contain", "techglobal")
        */

        // cy.url().should("include", "techglobal-training.com")
        // .should("eq", "https://techglobal-training.com/frontend")
        // .should("contain", "techglobal")

        cy.url().should("include", "techglobal-training.com")
        .and("eq", "https://techglobal-training.com/frontend")
        .and("contain", "techglobal")
        .and("not.contain", "backend")

        cy.title().should("include", "Techglobal")
        .and("eq", "Techglobal Training | Frontend Practice")
        .and("contain", "Tech")

        cy.get('#logo > img').should("be.visible")
        .and("exist")

        cy.get('#dropdown-button').should("exist")

        // how to capture all the links
        cy.xpath("//a").should("have.length", "28")
    })

    it.only("Implicit assertion of login and pw", () => {
        cy.visit("https://techglobal-training.com/login")

        // provide a value into an inputbox
        // cy.get("input[type='email']").type("TechGlobal")
        // cy.get("input[type='email']").should("have.value", "TechGlobal")

        cy.get(':nth-child(2) > input').type("TechGlobal")
        cy.get(':nth-child(4) > input').type("Test1234!")
        cy.contains("Select a core language").next("input, select, Select a core language")
        .select("javascript")
        cy.get("button[type='submit']").click()
    })
})