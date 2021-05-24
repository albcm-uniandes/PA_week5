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

  it('Cambiar los metadatos del sitio', () => {
    cy.get('.gh-setting-first .flex .gh-btn').contains('Expand').first().click({ force: true })
    cy.wait(2000)

    cy.get('input[id="metaTitle"]').first().clear({ force: true })
    cy.wait(2000)

    cy.get('input[id="metaTitle"]').type(faker.lorem.sentences(4), { force: true })
    cy.wait(2000)
  })

  it('Guardar los cambios', () => {
    cy.get('.gh-btn.gh-btn-blue').click()
    cy.wait(2000)
  })
})
