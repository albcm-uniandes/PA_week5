const funciones = require('../funciones')
const data = require('../data')

describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
	   /*
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('vinni9@gmail.com')
            cy.get('input[name="password"]').type('nohayclave1')
            cy.get('button[id=ember12]').click()
			cy.wait(1000)
			
        })        */
		funciones.login('g_cambiar_nombre_usuario')//cy.autenticar()
		funciones.screenshot('g_cambiar_nombre_usuario')
    })
    
    it('Cambia el nombre del usuario autenticado', ()=>{
		cy.get('li.gh-nav-list-new.relative').click()
		funciones.screenshot('g_cambiar_nombre_usuario')
		cy.get('.gh-user-name').click({force:true})
		funciones.screenshot('g_cambiar_nombre_usuario')
		cy.contains('a','Your Profile').first().click({force:true})
		funciones.screenshot('g_cambiar_nombre_usuario')
		cy.get('input[id="user-name"]').click({force:true})
		funciones.screenshot('g_cambiar_nombre_usuario')
		cy.get('input[id="user-name"]').type('{del}{selectall}{backspace}mi_otro nombre')
		funciones.screenshot('g_cambiar_nombre_usuario')
		cy.contains('span', 'Save').click({force:true})
		funciones.screenshot('g_cambiar_nombre_usuario')
			
    })
	
	
  })
