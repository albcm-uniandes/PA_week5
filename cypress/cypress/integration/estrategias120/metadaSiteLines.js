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

  it('Cambiar los metadatos para los buscadores', () => {
    cy.get('.gh-setting-first .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
    cy.wait(2000)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').last().clear({ force: true })
    cy.wait(2000)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').last().type(faker.lorem.lines(2),{ force: true })
    cy.wait(2000)
  })

  it('Guardar los cambios', () => {
    cy.get('.gh-btn.gh-btn-blue').click()
    cy.wait(2000)
  })
})
