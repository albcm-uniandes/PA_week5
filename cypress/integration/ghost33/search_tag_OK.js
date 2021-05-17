const baseUrl = Cypress.config("baseUrl") || "http://localhost:2368/ghost";
const util = require("../login.js");

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context("As logged user I want to search an unexistent post", () => {
  before(() => {
    util.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it("Click en el boton de buscar ", () => {
    cy.url().should("eq", `${baseUrl}/#/site`);
    cy.get(".gh-nav-btn-search").click({ multiple: true});
  });

  
  it("Introducir datos de tag creado", () => {
    cy.wait(2000)
    cy.get("input").first().type(" {backspace}Getting started");
  });

  it("Acceder al tag y validar que estamos en la pagina", () => {
    cy.get(".ember-power-select-group .ember-power-select-option").click({multiple:true});
    cy.url().should("eq", `${baseUrl}/#/tags/getting-started`);
    cy.wait(2000);
  });
});
