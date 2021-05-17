/// <reference types="cypress" />
const funciones = require('./funciones')
const data = require('./data')
let prueba = data.prueba3

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#/signin')
    cy.viewport(1024, 1024)
  })

  it('Cambier el titulo del sitio', () => {
    funciones.login(prueba)
    funciones.screenshot(prueba)

    cy.get('[href="#/settings/general/"]').click({ force: true })
    funciones.screenshot(prueba)

    cy.get('.gh-setting-first .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
    funciones.screenshot(prueba)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').first().clear({ force: true })
    funciones.screenshot(prueba)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').first().type('Nuevo titulo para el sitio',{ force: true })
    funciones.screenshot(prueba)
    
    cy.get('.gh-btn.gh-btn-blue').click()
    funciones.screenshot(prueba)
  })

})
