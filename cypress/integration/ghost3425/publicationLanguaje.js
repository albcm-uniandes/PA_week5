/// <reference types="cypress" />
const funciones = require('./funciones')
const data = require('./data')
let prueba = data.prueba2

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.viewport(1024, 1024)
    })
  
    it('Cambier el idioma de publicación', () => {
      funciones.login(prueba)
      funciones.screenshot(prueba)
  
      cy.get('[href="#/settings/general/"]').click({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting-last .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting-last .gh-setting-content .ember-text-field').first().clear({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting-last .gh-setting-content .ember-text-field').first().type('es',{ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-btn.gh-btn-blue').click()
      funciones.screenshot(prueba)
    })
  
  })
  
