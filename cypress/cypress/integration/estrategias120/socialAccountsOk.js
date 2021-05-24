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
  
    it('Cambiar las redes sociales', () => {
      cy.get('.gh-setting-first.gh-setting-last').first().contains('Expand').click({ force: true })
      cy.wait(2000)

      cy.get('.gh-setting-first.gh-setting-last .ember-text-field').first().clear({ force: true })
      cy.wait(2000)
      
      cy.get('.gh-setting-first.gh-setting-last .ember-text-field').first()
      .type(data.facebook1, { force: true })
      cy.wait(2000)

      cy.get('.ember-text-field').last().clear({ force: true })
      cy.wait(2000)

      cy.get('.gh-setting-first.gh-setting-last .ember-text-field').last()
      .type(faker.random.arrayElement([' ', '      ','            ','     ','\n','\t']), { force: true })
      cy.wait(2000)
    })

    it('Guardar los cambios', () => {
      cy.get('.gh-btn.gh-btn-blue').click()
      cy.wait(2000)
    })
  })
  
