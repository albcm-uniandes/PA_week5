/// <reference types="cypress" />
const funciones = require('./funciones')
const data = require('./data')
let prueba = data.prueba4

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.viewport(1024, 1024)
    })
  
    it('Cambiar las redes sociales', () => {
      funciones.login(prueba)
      funciones.screenshot(prueba)
  
      cy.get('[href="#/settings/general/"]').click({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting-first.gh-setting-last').first().contains('Expand').click({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting-first.gh-setting-last .ember-text-field').first().clear({ force: true })
      funciones.screenshot(prueba)
      
      cy.get('.gh-setting-first.gh-setting-last .ember-text-field').first()
      .type('https://www.facebook.com/usuario', { force: true })
      funciones.screenshot(prueba)

      cy.get('.ember-text-field').last().clear({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting-first.gh-setting-last .ember-text-field').last()
      .type('https://www.twitter.com/usuario', { force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-btn.gh-btn-blue').click()
      funciones.screenshot(prueba)
    })
  
  })
  
