const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const util = require('../login.js')
const faker = require('faker')
const logoutUrl = baseUrl + '/#/signout';
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const loginUrl = baseUrl + '/#/signin';
const password = Cypress.env('password') || 'abcd1234*+'
const jsonData = require('../empty_data')
const rndInt = Math.floor(Math.random() * jsonData.length) + 1

context('Login & log out: empty login email', () => {

    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Log out', () => {
        cy.visit(logoutUrl).then((win) => {
            cy.wait(1000);
        })
    })

    it("Invalid login", () => {
        // Random pick on exec
        cy.visit(loginUrl).then((win) => {
            cy.wait(1000);
        })
        cy.get('form').within(($form) => {
            cy.get('input[name="identification"]').type(jsonData[rndInt].value + `@gmail.com`, {force: true})
            cy.get('input[name="password"]').type(password, {force: true})
            cy.root().submit();
            cy.url().should('eq', loginUrl)
        });
        cy.wait(1000);

})

});
