let contador = 1

export function screenshot (nombre){
    cy.wait(2000)
    cy.screenshot(nombre + ' ' + contador)
    contador++
}

export function login (nombre){
    cy.get('[id^=login]').within(() => {
        cy.get('input[name="identification"]').type(Cypress.env('username'))
        cy.get('input[name="password"]').type(Cypress.env('password'))
        cy.root().submit()
        cy.screenshot(nombre + ' 0 ')
    })
}
