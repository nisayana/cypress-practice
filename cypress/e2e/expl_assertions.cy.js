describe("Explicits assertions", () => {
    it("test1", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expectedName = "xyz";

        // capture an element first
        cy.get(".oxd-userdropdown-name").then(($name) => {
            let actName = $name.text;
            // BDD style
            // to compare expectedName with actName
            // expect(actName).to.equal(expectedName)
            expect(actName).to.not.equal(expectedName)

            // TDD style
            // assert.equal(actName, expectedName)
            assert.notEqual(actName, expectedName)
        })
    })

    it("explicit assertions practice", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        cy.get("#hello_paragraph").should("have.text", "Hello World!")
        cy.get("#testing_paragraph").should("have.text", "I like automation testing!")

        const arr = ["Hello World!", "I like automation testing!"]

        cy.contains("Paragraphs").nextAll().each(($item, idx) => {
            // let text = $item.text
            cy.log($item.text)
            expect($item.text()).to.equal(arr[idx])
        })
    })

    it("explicit assertions practice", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        const arr = ["Programming Languages", "Automation Tools"]

        cy.contains("Headings").nextAll().each(($item, idx) => {
            let text = $item.text()
            cy.log(text)
            expect(text).to.equal(arr[idx])
            expect($item).to.be.visible
        })

        cy.contains("Headings").nextAll().each(($el, index) => {
            cy.wrap($el).should('have.text', arr[index]).and('be.visible')
            cy.wrap($el.text()).should('eq', arr[index])
        })
    })

    it.only("explicit assertions practice", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        const arr = ["Programming Languages", "Automation Tools"]

        cy.contains("Dropdowns").nextAll().each(($item, idx) => {
            cy.wrap($item).should('be.enabled')
        })

    })
})
