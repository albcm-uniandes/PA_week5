const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
const util = require('../login.js')
const funciones = require('../funciones')
const jsonData = require('../empty_data')
const rndInt = Math.floor(Math.random() * jsonData.length) + 1
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

context('Editar location en el perfil', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir vista de  staff', () => {
        cy.visit(`${baseUrl}/#/staff`)
        cy.wait(2000)  
        cy.url().should('eq', `${baseUrl}/#/staff`)
        funciones.screenshot('g_editar location perfil')
    })

    it('Abrir pagina de edicion', () => {
        cy.get('section.apps-grid-container.gh-active-users')
            .within(() => {
                cy.get('a')
                .first()
                .click({force: true})

                cy.wait(2000)
            })
        funciones.screenshot('g_editar location perfil')

    })

    it('Introducir datos de location', () => {
        cy.get('form').within(() => {
            cy.get('input[id="user-location"]')
                .type('{selectall}{backspace}', {force: true})
            cy.get('input[id="user-location"]')
                .type(`${jsonData[rndInt].value}`, {force: true})
        })
        funciones.screenshot('g_editar location perfil')

    })

    it('Guardar cambios', () => {
         cy.get('section.view-actions').within( () => {
            cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
            cy.wait(2000)
         })
         funciones.screenshot('g_editar location perfil')

    })
})
