/// <reference types="cypress" />
const funciones = require('../funciones')
const data = require('../data')
const util = require('../login.js')
let prueba = data.prueba5

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

  it('Volver privada la publicación', () => {
     cy.get('.input-toggle-component').click({ force: true })
    funciones.screenshot(prueba)

    cy.get('input[name="general[password]"]').clear({ force: true })
    funciones.screenshot(prueba)

    cy.get('input[name="general[password]"]').type('abcd1234', { force: true })
    funciones.screenshot(prueba)
  })

  it('Guardar los cambios', () => {
    cy.get('.gh-btn.gh-btn-blue').click()
    funciones.screenshot(prueba)
  })
})
  
