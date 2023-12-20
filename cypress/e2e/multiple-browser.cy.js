describe('Multiple Browser', () => {
    describe('Chrome', { browser: 'chrome' }, () => {
        cy.visit('https://www.google.com')
    })
    describe('Edge', { browser: 'edge' }, () => {
        cy.visit('https://www.google.com')
    })
    describe('Firefox', { browser: 'firefox' }, () => {
        cy.visit('https://www.google.com')
    })
})