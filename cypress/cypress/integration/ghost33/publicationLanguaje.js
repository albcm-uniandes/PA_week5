const funciones = require('../funciones')
const data = require('../data')
const util = require('../login.js')
let prueba = data.prueba2

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context('Actions', () => {

  before(() => {
    util.login();
    funciones.screenshot(prueba)
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  })

  it('Configuraciones generales', () => {
    cy.get('[href="#/settings/general/"]').click({ force: true })
    funciones.screenshot(prueba)
    cy.wait(2000)
  })

  it('Cambier el idioma de publicación', () => {
    cy.get('.gh-setting-last .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
    funciones.screenshot(prueba)

    cy.get('.gh-setting-last .gh-setting-content .ember-text-field').first().clear({ force: true })
    funciones.screenshot(prueba)

    cy.get('.gh-setting-last .gh-setting-content .ember-text-field').first().type('es',{ force: true })
    funciones.screenshot(prueba)
    cy.wait(2000)
  })

  it('Guardar los cambios', () => {
    cy.get('.gh-btn.gh-btn-blue').click()
    funciones.screenshot(prueba)
  })

})
  
