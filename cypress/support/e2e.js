// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import addContext from 'mochawesome/addcontext';
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('test:after:run', (test) => {
    const customMessages = window.custom_messages[test.id];
    addContext({test}, { 
        title: 'Expected Results',
        value: customMessages?.length > 0 ? customMessages?.map(msg => msg.trim()).join("\n- ") : customMessages
    })
    console.log(customMessages?.length > 0 ? customMessages?.map(msg => msg.trim()).join("\n- ") : customMessages)
    delete window.custom_messages[test.id];
});