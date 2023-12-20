it.only('should open the stripe checkout page', function(){ 
    cy.visit('https://stripe-tinydemos-pricing-table.glitch.me/').wait(10000)
    cy.get(".screenshot-height-container iframe").first().then($iframe => {
        const $body = $iframe.contents().find('body')
        console.log($iframe)
    })
    // cy.origin('https://checkout.stripe.com/', () => { cy.get('input[name="shippingName"]').click().type('Ana'); }); 
});