const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const util = require('../login.js')
const funciones = require('../funciones')
const faker = require('faker')

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Editar perfil con caracteres diferentes a utf-8', () => {
    before(() => {
        util.login();
        faker.locale = "ja";
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir vista de  staff', () => {
        cy.visit(`${baseUrl}/#/staff`)
        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/staff`)
    })

    it('Abrir pagina de edicion', () => {
        cy.get('section.apps-grid-container.gh-active-users')
            .within(() => {
                cy.get('a')
                .first()
                .click({force: true})

                cy.wait(2000)
            })

    })

    it("Introducir bio con caracteres asiaticos", () => {
        cy.get("form").within(() => {
            cy.get('textarea[id="user-bio"]')
            .type('{selectall}{backspace}', {force: true})
            cy.get('textarea[id="user-bio"]')
                .type(`${faker.lorem.paragraph()}`, {force: true})
        })
        });
    
        it('Guardar cambios', () => {
            cy.get('section.view-actions').within( () => {
               cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
               cy.wait(2000)
            })
   
       })
})
