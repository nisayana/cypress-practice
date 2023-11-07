describe("CssLocators", () => {
    it("csslocators", () => {
        cy.visit("https://techglobal-training.com/")
        // cy.get("#search_query_top").type("T-Shirts")
        cy.get(".dropdown-trigger").click()
        // cy.get(".lighter").contains("T-Shirts") // assertion
    })
})