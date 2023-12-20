require("cypress-real-events")

describe("Test take screenshoot on desktop", () => {

    it("Take screenshoot on desktop", () => {
        Cypress.on("uncaught:exception", () => {
            return false
        })
        // cy.visit("https://codeboxinc.com").wait(3000)

        // cy.get("ul li.login-btn a").realHover()

        cy.visit("https://dev.belajarngaji.id").wait(2000)
        
        cy.get("body").then(() => {
            cy.wait(2000)
            cy.window().then((win) => { 
                const modalClose = win.document.querySelector(".modal button.close")
                if(modalClose) modalClose.click();
                cy.wait(1000)
            });
        })

        // cy.get("button.default-button.bordered").realHover().wait(1000)
        // .should("have.css", "background-color", "rgb(136, 152, 74)")
        cy.contains("Login").click()

        cy.get("input[type=email]").type("adnanerlansyah403@gmail.com")
        cy.get("input[type=password]").type("12345678")
        cy.get("button[type=submit]").click({ force: true }).wait(2000)

        cy.get("button.default-button.action-btn").realHover()
    })

})