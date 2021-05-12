const baseUrl = Cypress.config("baseUrl") || "http://localhost:2368/ghost";
const util = require("../login.js");

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context("Editar location en el perfil", () => {
  before(() => {
    util.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it("Abrir vista de  staff", () => {
    cy.visit(`${baseUrl}/#/staff`);
    cy.wait(2000);
    cy.url().should("eq", `${baseUrl}/#/staff`);
  });

  it("Abrir pagina de edicion", () => {
    cy.get("section.apps-grid-container.gh-active-users").within(() => {
      cy.get("a").first().click({ force: true });

      cy.wait(2000);
    });
  });

  it("Introducir datos de location con más de 255 caracteres", () => {
    cy.get("form").within(() => {
      cy.get('input[id="user-location"]').type(
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in somepassages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        { force: true }
      );
    });
  });

  it("Guardar cambios y ver el error", () => {
    cy.get("section.view-actions").within(() => {
      cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
      cy.wait(200);
      cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view")
      cy.wait(2000);
    });
    
  });
});
