/// <reference types="cypress" />
const funciones = require('../funciones')
const data = require('../data')
const util = require('../login.js')
let prueba = data.prueba3

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

  it('Cambiar el titulo del sitio', () => {
    cy.get('.gh-setting-first .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
    funciones.screenshot(prueba)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').first().clear({ force: true })
    funciones.screenshot(prueba)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').first().type('Nuevo titulo para el sitio',{ force: true })
    funciones.screenshot(prueba)
    
    cy.wait(2000)
  })

  it('Guardar los cambios', () => {
    cy.get('.gh-btn.gh-btn-blue').click()
    funciones.screenshot(prueba)
  })
})
