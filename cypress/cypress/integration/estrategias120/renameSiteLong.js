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
  })

  it('Cambiar el titulo del sitio', () => {
    cy.get('.gh-setting-first .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
    cy.wait(2000)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').first().clear({ force: true })
    cy.wait(2000)

    cy.get('.gh-setting-first .gh-setting-content .ember-text-field').first().type(faker.lorem.sentence(30),{ force: true })
    cy.wait(2000)
  })

  it('Guardar los cambios', () => {
    cy.get('.gh-btn.gh-btn-blue').click()
    cy.wait(2000)
  })
})
