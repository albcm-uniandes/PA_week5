const baseUrl = Cypress.config("baseUrl") || "http://localhost:2368/ghost";
const funciones = require('../funciones')
const data = require('../data')
const util = require('../login.js')
let prueba = data.prueba6

const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";

context("Editar location en el perfil con más de 255 caracteres", () => {

  before(() => {
    util.login();
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  })

  it("Abrir vista de  staff", () => {
    cy.wait(2000);
    cy.visit(`${baseUrl}/#/staff`);
    cy.wait(2000);
    cy.url().should("eq", `${baseUrl}/#/staff`);
    funciones.screenshot('g_editar location perfil mas de 255')

  });

  it("Abrir pagina de edicion", () => {
    cy.get("section.apps-grid-container.gh-active-users").within(() => {
      cy.get("a").first().click({ force: true });

      cy.wait(2000);
      funciones.screenshot('g_editar location perfil mas de 255')

    });
  });

  it("Introducir datos de location con más de 255 caracteres", () => {
    cy.get("form").within(() => {
      cy.get('input[id="user-location"]').type(
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in somepassages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        { force: true }
      );
    });
    funciones.screenshot('g_editar location perfil mas de 255')

  });

  it("Guardar cambios y ver el error", () => {
    cy.get("section.view-actions").within(() => {
      cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
      cy.wait(200);
      cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view")
      cy.wait(2000);
    });
    funciones.screenshot('g_editar location perfil mas de 255')

  });
});
