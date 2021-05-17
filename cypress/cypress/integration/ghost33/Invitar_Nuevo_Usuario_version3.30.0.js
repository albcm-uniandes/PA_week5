const funciones = require('../funciones')
const data = require('../data')


describe('Invitar nuevo Usuario', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
		cy.wait(4000)
        funciones.screenshot('InvitarUsuario_')
		
        
    })
	
	it('Invitar people en pagina inicial', () => {
		 funciones.login()
		 funciones.screenshot('InvitarUsuario_')
		 cy.wait(2000)
		 cy.get('a[href="#/staff/"]').first().click()
		 funciones.screenshot('InvitarUsuario_')
		 cy.contains('span', 'Invite people').click({force:true})
		 funciones.screenshot('InvitarUsuario_')
		 cy.get('input[name="email"]').type('cesar.chembi@gmail.com')
		 funciones.screenshot('InvitarUsuario_')
		 cy.contains('span', 'Send invitation now').click({force:true})
		 funciones.screenshot('InvitarUsuario_')
		 cy.reload()
		 funciones.screenshot('InvitarUsuario_')
		 
      })
   })  
