const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const util = require('../login.js')
const faker = require('faker')
const logoutUrl = baseUrl + '/#/signout';
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const loginUrl = baseUrl + '/#/signin';
const username = Cypress.env('username') || 'acevedobedoya@gmail.com'

context('Login & log out: Invalid login password', () => {
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
        cy.visit(loginUrl).then((win) => {
            cy.wait(1000);
        })
        cy.get('form').within(($form) => {
            cy.get('input[name="identification"]').type(username, {force: true})
            cy.get('input[name="password"]').type(`${faker.lorem.text()}`, {force: true})
            cy.root().submit();
            cy.url().should('eq', loginUrl)
        });
        cy.wait(1000);

})

});
