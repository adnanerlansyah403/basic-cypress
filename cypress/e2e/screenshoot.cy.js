
describe("Test take screenshoot on desktop", () => {

    it("Take screenshoot on desktop", () => {
        Cypress.on("uncaught:exception", () => {
            return false
        })
        cy.visit("https://alkademi.id").wait(3000)

        cy.screenshot()
    })

})