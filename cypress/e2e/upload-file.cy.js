import spok from 'cy-spok';
import { faker } from '@faker-js/faker';
import elementSelector from '../selectors/ht-core/element.css';
import { formattedDate } from '../../helpers/timestamp';
const auth = require("../selectors/ht-core/auth.css");
const globalSelector = require("../selectors/ht-core/global.css");
const sidebar = require("../selectors/ht-core/sidebar.css");

describe('Test uploading files', () => {

    it('try to upload a file', function () {
        let account = {
            email: 'dev.aggregator@dummy.com',
            password: "semuasama",
            type: 'aggregator',
        }

            
        if(['writer', 'admin', 'superadmin'].includes(account?.type)) cy.visit('/bukansembarangorang/login').wait(1000)
        else cy.visit(`/login`).wait(1000)

        // Check the title and brand image
        cy.get(auth.titleLogin).then($el => expect($el.text()).to.equal("Login"));
        cy.get(auth.imageBrand, { timeout: 20000 }).then($el => expect($el.attr('src')).contain('belajarngaji'));

        // Track endpoint signin
        if(['writer', 'admin', 'superadmin'].includes(account?.type)) {
            cy.intercept('POST', `${Cypress.env('api_server')}admin/signin`).as('signin');
            cy.intercept(`${Cypress.env('api_server')}admins/*`).as('userProfile');
        }
        else {
            cy.intercept('POST', `${Cypress.env('api_server')}signin`).as('signin');
            cy.intercept(`${Cypress.env('api_server')}users/*/profile`).as('userProfile');
        }

        // Try to login
        cy.get(auth.inputEmail).type(account?.email).wait(500);
        cy.get(auth.inputPassword).type(account?.password, { log: false }).wait(1500);
        cy.get("button[type=submit]").click({ force: true }).wait(2000)

        // Check if there's an alert message error or not
        cy.window().then(win => expect(win.document.querySelector(globalSelector.alertDanger), `Expected there's no error`) == null);

        // Check if aggregator logged in and entered into the dashboard
        cy.location('pathname').should("equal", "/dashboard")
        .wait(1000)
        cy.screenshot({ capture: 'viewport', scale: true })

        // Go to the menu list mentors
        if(!['admin', 'superadmin'].includes(account?.type)) {
            cy.get(sidebar.sidebarLinks).filter(":contains('Mentor')").first().click().wait(500)
            .then($el => {
                let parentElement = $el.parent();
                expect(parentElement.hasClass(sidebar.sidebarNavDropdownShow), `Expected has class active`).to.equal(true)
                return parentElement
            }).find(sidebar.sidebarDropdownLinks).last().click({ force: true }).wait(1000);
        } else {
            cy.get(sidebar.sidebarLinks).filter(":contains('Mentor')").first().click().wait(500);
        }

        // Click button add mentor from the form registration
        let linkMentorsRegistration = '';
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake(url => linkMentorsRegistration = url).as('windowMentorsRegistrationOpen')
        })
        cy.get(globalSelector.buttonSuccess).first().click()
        .get('@windowMentorsRegistrationOpen', { timeout: 5000 }).should('be.calledOnce')
        .wait(1000)
        .window().then(win => win.location.href = linkMentorsRegistration)

        // Check if it's already on page registration mentor form
        cy.get(elementSelector.headingOne).first()
        .should("contain.text", "Form Registrasi Mentor");

        // Fill the form registration mentor
        // Dummy Data
        let fullName = faker.person.fullName(),
        emailAddress = fullName.replace(/\s+/g, '').toLowerCase() + '@gmail.com',
        username = fullName.replace(/[\s.]+/g, '').toLowerCase(),
        password = 'semuasama',
        placeOfBirth = 'Bandung',
        birthDate = formattedDate(faker.date.birthdate({ min: 1990, max: 2003, mode: 'year' }).toString()),
        job = faker.person.jobTitle(),
        statusMarried = faker.helpers.arrayElement([1, 2]),
        telephone = '087748310753',
        address = faker.location.streetAddress(true),
        city = faker.number.int({ min: 1, max: 515 }),
        cityId = 0,
        lastEducation = faker.number.int({ min: 1, max: 5 }),
        experienceTeach = faker.lorem.paragraph(),
        price = faker.commerce.price({ min: 15000, max: 20000, dec: 0 });
        // Fill the input field of Photo KTP
        cy.fixture('images/foto-ktp.jpg', null).as('myFixture')
        cy.get('input[type=file]').first().scrollIntoView({ offset: { top: -150 } }).parent().prev().selectFile('@myFixture')
        // Fill the input field of License
        cy.get(globalSelector.formGroupInputFile).eq(1)
        .scrollIntoView({ offset: { top: -150 } })
        .then($el => {
            expect($el.val(), `Expected value is empty`).to.be.empty
            return $el
        })
        .parent()
        .prev().then($el => {
            expect($el.text()).to.contain('Lisensi')
            return $el
        })
        .next()
        .find(elementSelector.inputFile).first()
        .selectFile('cypress/fixtures/images/lisensi.jpg').wait(500)
        .then($el => expect($el.val()).to.not.empty)
        // Fill the input field of License
        cy.get(globalSelector.formGroupInputFile).last()
        .scrollIntoView({ offset: { top: -150 } })
        .then($el => {
            expect($el.val(), `Expected value is empty`).to.be.empty
            return $el
        })
        .parent()
        .prev().then($el => {
            expect($el.text()).to.contain('Ijazah Terakhir')
            return $el
        })
        .next()
        .find(elementSelector.inputFile).first()
        .selectFile('cypress/fixtures/images/ijazah.jpg').wait(500)
        .then($el => expect($el.val()).to.not.empty)
        

    })

})