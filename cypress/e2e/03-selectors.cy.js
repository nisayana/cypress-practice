/// <reference types="cypress" />

describe("selectors", () => {
    it("practice web elements", () => {
        cy.visit("https://techglobal-training.com/frontend")
        cy.contains("Project")
    })
})