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
    cy.get(".gh-nav-btn-search").click({ force: true });
  });

  it("Introducir dato de post no creado en la busqueda", () => {
    cy.get("input").first().type("__RESOURCE_NOT_FOUND__", { force: true });
  });

  it("Assert de resultado no encontrado", () => {
      cy.get(".ember-power-select-option--no-matches-message")
      cy.wait(2000);
  });
});
