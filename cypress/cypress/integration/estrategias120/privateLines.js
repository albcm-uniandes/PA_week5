
const faker = require('faker')
const data = require('./data')
const util = require('../login.js')

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context('Actions', () => {

  before(() => {
    util.login();
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  })

  it('Configuraciones generales', () => {
    cy.get('[href="#/settings/general/"]').click({ force: true })
    cy.wait(2000)
  })

  it('Volver privada la publicación', () => {
    cy.get('.input-toggle-component').click({ force: true })
    cy.wait(2000)
    cy.get('input[name="general[password]"]').clear({ force: true })
    cy.wait(2000)
    cy.get('input[name="general[password]"]').type(faker.lorem.lines(2), { force: true })
    cy.wait(2000)
  })

  it('Guardar los cambios', () => {
    cy.get('.gh-btn.gh-btn-blue').click()
    cy.wait(2000)
  })
})
  
