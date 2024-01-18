const addContext = require('mochawesome/addContext');

describe('Multiple Roles', () => {
    
    describe('Super Admin', () => {
        let account = {
            name: 'Super Admin',
            email: 'superadmin@example.com',
            password: '****',
            type: 'superadmin',
        }
        
        it('Test case 1', function() {
            cy.visit('/').wait(1000)

            window.custom_messages = {};
            window.custom_messages[this.test.id] = ['- Success from super admin ✅'];
        })

    })
    
    describe('Admin', () => {
        let account = {
            name: 'Admin man',
            email: 'admin@example.com',
            password: '****',
            type: 'admin',
        }

        it('Test case 1', function() {
            cy.visit('/').wait(1000)

            window.custom_messages = {};
            window.custom_messages[this.test.id] = ['- Success from admin ✅'];
        })

    })

})