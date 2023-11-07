describe("advanced ui and interactions", () => {
    it("multiple windows", () => {

        cy.visit("https://techglobal-training.com/frontend/")
        cy.contains("Multiple Windows").click()
        cy.get("#apple").should('have.attr', 'target', '_blank')
        cy.get("#apple").invoke("removeAttr", "target").click()
        cy.window().then((newWindow) => {
            cy.url().should("eq", "https://www.apple.com/")
        })
        cy.go(-1)

        cy.get("#microsoft").invoke("removeAttr", "target").click()
        cy.window().then((newWindow) => {
            cy.url().should("eq", "https://www.microsoft.com/en-us/")
        })
        cy.go(-1)

        cy.get("#tesla").invoke("removeAttr", "target").click()
        cy.window().then((newWindow) => {
            cy.url().should("eq", "https://www.tesla.com/")
        })
    })

    it("validates dates", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.contains("HTML Cards").click()

        cy.contains("Date Inputs").parent().find("input").as("dateInputs")

        const dates = ["11/11/2021", "11/12/2001"]
        cy.get("dateInputs").each(($el, idx) => {
            cy.wrap($el).type(`{dates[idx]}{enter}`).should("have.attr", "value", dates[idx])
            .and("be.enabled")
            .and("not.have.attr", "required")
        })
    })

    /**
         * 1. Go to https://techglobal-training.com/frontend
         * 2. Navigate to 'Html Elements' card
         * 3. From the "Dropdowns" section
         * 4. Validate dropdown 1 and dropdown 2 is enabled
         * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
         * 7. Validate options are selected
     */

    it("validates dropdown", () => {
        cy.visit("https://techglobal.com/frontend")
        cy.contains("Html Elements").click()

        // cy.contains("Dropdown").parent().find("select").as("dropdownFields")

        const companies = ["Microsoft", "Apple"]

        // cy.get("dropdownFields").each(($el, idx) => {
        //     cy.wrap($el).select(companies[idx]).should("have.attr", "value", companies[idx])
        //     .and("be.enabled")
        // })

        cy.get("#company-dropdown1", "#company-dropdown2").each(($el, idx) => {
            cy.wrap($el).should("be.enabled").select(companies[idx]).find("option:selected").should("have.text", companies[idx])
        })
    })
})