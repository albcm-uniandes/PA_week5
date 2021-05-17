const baseUrl = Cypress.config("baseUrl") || "http://localhost:2368/ghost";
const util = require("../login.js");

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context("1. Escenario positivo busqueda de post", () => {
  before(() => {
    util.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it("Click en el boton de buscar ", () => {
    cy.url().should("eq", `${baseUrl}/#/site`);
    cy.get(".gh-nav-btn-search").click({ force: true });
  });

  it("Introducir datos de busqueda", () => {
    cy.get("input").first().type(' {backspace}Welcome to ghost');
  });

  it("Acceder al post y validar que estamos dentro", () => {
      cy.get(".ember-power-select-group .ember-power-select-option").click();
      cy.url().should("include", `${baseUrl}/#/editor/post/`);
      cy.wait(2000);
  });
});
