const baseUrl = Cypress.config("baseUrl") || "http://localhost:2368/ghost";
const util = require("../login.js");
const funciones = require('../funciones')
const faker = require('faker')

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context("Búsqueda con más de 255 caracteres", () => {
  before(() => {
    util.login();
    faker.locale = "ja";

  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it("Click en el boton de buscar ", () => {
    cy.url().should("eq", `${baseUrl}/#/site`);
    cy.get(".gh-nav-btn-search").click({ force: true });
    funciones.screenshot('g_buscar post')

  });

  it("Introducir datos de busqueda", () => {
    cy.get("input").first().type(` {backspace} ${faker.lorem.paragraphs()}`);
    funciones.screenshot('g_buscar post')

  });

  it("Assert de resultado no encontrado", () => {
    cy.get(".ember-power-select-option--no-matches-message")
    cy.wait(2000);
    funciones.screenshot('g_post inexistente')

});
});
