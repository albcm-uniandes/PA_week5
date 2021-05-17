/// <reference types="cypress" />
const funciones = require('./funciones')
const data = require('./data')
let prueba = data.prueba5

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.viewport(1024, 1024)
    })
  
    it('Volver privada la publicación', () => {
      funciones.login(prueba)
      funciones.screenshot(prueba)
  
      cy.get('[href="#/settings/general/"]').click({ force: true })
      funciones.screenshot(prueba)
      
      cy.get('.input-toggle-component').click({ force: true })
      funciones.screenshot(prueba)

      cy.get('input[name="general[password]"]').clear({ force: true })
      funciones.screenshot(prueba)

      cy.get('input[name="general[password]"]').type('abcd1234', { force: true })
      funciones.screenshot(prueba)
      
      cy.get('.gh-btn.gh-btn-blue').click()
      funciones.screenshot(prueba)
    })
  
  })
  
