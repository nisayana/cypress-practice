describe("CSS Locators", () => {
    it("logo", () => {
        cy.visit("https://techglobal-training.com/frontend/html-elements")
        cy.get("#radio_1_button").should("not.be.checked")
        .check().should("be.checked")
    })
})