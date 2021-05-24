const funciones = require('../funciones')
const data = require('../data')
var dato


describe('Invitar nuevo Usuario', () => {
    before(()=>{
		funciones.consumeRestUrl(data.invitarUsuario)
		cy.wait (3000)
       
        
    })
	
	for (let i = 0; i< 3; i++){
		
	it('Invitar people en pagina inicial', () => {
		funciones.login('g_publica_post_schedule')
			dato = funciones.getjsonrta(i)
			console.log(dato.email)
		 cy.get('a[href="#/staff/"]').first().click()
		
		 cy.contains('span', 'Invite people').click({force:true})
		 //funciones.screenshot('InvitarUsuario_')
         //cy.get('input[name="email"]').type(dato.email)
		 
		 cy.get('#new-user-email').focus().type(dato.email)
		 
		 //cy.get('input[name="email"]').focus().type('kpain4@manage.com')
		 //funciones.screenshot('InvitarUsuario_')
		 cy.contains('span', 'Send invitation now').click({force:true})
		 //funciones.screenshot('InvitarUsuario_')
		 cy.get('a[href="#/staff/"]').first().click()
		 //funciones.screenshot('InvitarUsuario_')
		 
		 
      })
	  
	}
   })  
