const data = require('./data')
let contador = 1

export function screenshot (nombre){
    cy.wait(2000)
    cy.screenshot(nombre + ' ' + contador + ' ' + Date.now())
    contador++
}

export function login (nombre){
    cy.get('[id^=login]').within(() => {
        cy.get('input[name="identification"]').type(data.email)
        cy.get('input[name="password"]').type(data.password)
        cy.root().submit()
        cy.screenshot(nombre + ' 0 ' + Date.now())
    })
}