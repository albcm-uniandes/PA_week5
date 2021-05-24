const baseUrl = Cypress.config("baseUrl") || "http://localhost:2368/ghost";
const util = require("../login.js");
const funciones = require('../funciones')
const jsonData = require('../empty_data')
const rndInt = Math.floor(Math.random() * jsonData.length) + 1

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context("Búsqueda con caracteres vacios tomado aleatoriamente", () => {
  before(() => {
    util.login();
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
    cy.get("input").first().type(` {backspace}${jsonData[rndInt].value}`);
    funciones.screenshot('g_buscar post')

  });

});
