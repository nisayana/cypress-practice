/// <reference types="cypress" />

describe("Project1", () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1')

    })

    it("exercise1, validate Contact", () => {
        cy.get(".mb-5 > h1").should("have.text", "Contact Us")
        cy.get("#address").should("have.text", "2860 S River Rd Suite 480, Des Plaines, IL 60018")
        cy.get("#email").should("have.text", "info@techglobalschool.com")
        cy.get("#phone-number").contains("(773) 257-3010")
    })

    it("exercise2, validate Full Name", () => {
        cy.get(".field").contains("Full name").parent().as("nameInput")
        
        cy.get("@nameInput").each(($el, index) => {
            cy.wrap($el).find("label").should("have.text", "Full name *")
            cy.wrap($el).find("input").should("be.visible")
            .and("have.attr", "placeholder", "Enter your full name")
        })
    })

    it("exercise3, validate Genders", () => {
        cy.get(".field").contains("Gender *").parent().find(".radio").as("genderRadioButtons")
        
        const genders = ["Male", "Female", "Prefer not to disclose"]
        cy.get("@genderRadioButtons").each(($el, index) => {
            cy.wrap($el).should('have.text', genders[index])
            cy.wrap($el).find('input').should('be.visible').and('be.enabled')
            // .and("have.attr", "required")
        })

        cy.get(".radio input").each(($input) => {
            cy.wrap($input).should("not.be.checked")
        });

        cy.contains("Male").find("input[type='radio']").click();
        cy.contains("Male").find("input[type='radio']").should("be.checked");
        cy.contains("Female").find("input[type='radio']").should("not.be.checked");
        cy.contains("Prefer not to disclose").find("input[type='radio']").should("not.be.checked");
    })

    const testData = [
        {
            description: 'Validate the Address input box',
            label: 'Address',
            placeholder: 'Enter your address*',
            required: false
        },
        {
            description: 'Validate the Email input box',
            label: 'Email *',
            placeholder: 'Enter your email',
            required: true
        },
        {
            description: 'Validate the Phone input box',
            label: 'Phone',
            placeholder: 'Enter your phone number',
            required: false
        },
        {
            description: 'Validate the Message input box',
            label: 'Message',
            placeholder: 'Type your message here...',
            required: false
        }
    ]
    
    testData.forEach((test, index) => {
    
        it(`Test Case 0${index + 4} - ${test.description}`, () => {
            
            cy.contains('.label', test.label).should('have.text', test.label)
        
            cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
            .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
        })
    })

    it("exercise 8", () => {
        cy.get(".checkbox").contains("I give my consent to be contacted.").click()
        cy.get("input[type='checkbox']").should("have.attr", "required")
        cy.get("input[type='checkbox']").check().should("be.checked")
        cy.get("input[type='checkbox']").uncheck().should("not.be.checked")
    })

    it("exercise 9", () => {

        cy.get(".is-link").should("be.visible")
        .and("have.text", "SUBMIT")

        cy.get("button[type='submit']").should("not.be.disabled")

    })

    it("exercise 10", () => {
        cy.get(".field").contains("Full name").parent().find("input").type("Sayana Nimaeva")
        cy.get(".field").contains("Gender").parent().find(":nth-child(3)").click()
        cy.get(".field").contains("Address").parent().find("input").type("New York, NY")
        cy.get("input[type='email']").type("test@gmail.com")
        cy.get("input[type='phone']").type("123456789")
        cy.get("textarea").type("Here is my message.")
        cy.get(".checkbox > input").click()
        cy.get(".button.is-link").should("be.visible").click()
        cy.get(".mt-5").should("have.text", "Thanks for submitting!")
    })
})