const username = Cypress.env('username') || 'acevedobedoya@gmail.com'
const password = Cypress.env('password') || 'abcd1234*+'
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const loginUrl = baseUrl + '/#/signin';
export const login = () => {
    cy.clearCookies();
    cy.visit(loginUrl).then((win) => {
        cy.wait(1000);
    })
    cy.get('form').within(($form) => {
        cy.get('input[name="identification"]').type(username).should('have.value', username);
        cy.get('input[name="password"]').type(password).should('have.value', password);
        cy.root().submit();
        cy.url().should('eq', baseUrl + '/#/site')
    });
    cy.wait(1000);
}