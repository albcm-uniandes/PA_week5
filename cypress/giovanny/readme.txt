En la carpeta cypress\support\commands.js

Crear la siguiente funcion

Cypress.Commands.add('autenticar', () => { 
	cy.get('form').within(() => {
		cy.get('input[name="identification"]').type('vinni9@gmail.com')
		cy.get('input[name="password"]').type('nohayclave1')
		cy.get('button[id=ember12]').click()
		cy.wait(1000)
			
    })
 })
