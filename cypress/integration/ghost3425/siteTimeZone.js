/// <reference types="cypress" />
const funciones = require('./funciones')
const data = require('./data')
let prueba = data.prueba1

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.viewport(1024, 1024)
    })
  
    it('Cambier la zona horaria sitio', () => {

      funciones.login(prueba)
      funciones.screenshot(prueba)
  
      cy.get('[href="#/settings/general/"]').click({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
      funciones.screenshot(prueba)

      cy.get('.gh-setting .gh-setting-content-extended .gh-select .ember-view').select('(GMT -5:00) Bogota, Lima, Quito' , {force: true}).should('have.value', 'America/Bogota')
      funciones.screenshot(prueba)
      
      cy.get('.gh-btn.gh-btn-blue').click()
      funciones.screenshot(prueba)
    })
  })