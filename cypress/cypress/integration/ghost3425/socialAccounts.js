/// <reference types="cypress" />
const funciones = require('../funciones')
const data = require('../data')
const util = require('../login.js')
let prueba = data.prueba4

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
  
    it('Cambiar las redes sociales', () => {
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
    })

    it('Guardar los cambios', () => {
      cy.get('.gh-btn.gh-btn-blue').click()
      funciones.screenshot(prueba)
    })
  
  })
  
