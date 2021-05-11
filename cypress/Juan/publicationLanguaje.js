/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
    })
  
    it('Cambier el idioma de publicación', () => {
      cy.get('[id^=login]').within(() => {
        cy.get('.email.ember-text-field.gh-input.ember-view').type('acevedobedoya@gmail.com')
        cy.get('.password.ember-text-field.gh-input.ember-view').type('abcd1234*+')
        cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        cy.log('Login successful')
      })
  
      cy.wait(200)
      cy.get('[href="#/settings/general/"]').click({ force: true })
      cy.wait(200)
      cy.get('.gh-setting-last .gh-setting-action .gh-btn').contains('Expand').first().click({ force: true })
      cy.wait(200)
      cy.get('.gh-setting-last .gh-setting-content .ember-text-field').first().clear({ force: true })
      cy.wait(200)
      cy.get('.gh-setting-last .gh-setting-content .ember-text-field').first().type('es',{ force: true })
      cy.wait(200)
      cy.get('.gh-btn.gh-btn-blue').click()
    })
  
  })
  
