const funciones = require('../funciones')
const data = require('../data')
var dato


describe('Crear Integración Slack', () => {
    before(()=>{
		funciones.consumeRest()
		cy.wait (3000)
       
        
    })
	
	for (let i = 0; i< 1; i++){
		
	it('Crear Integración Slack', () => {
		funciones.login('g_publica_post_schedule')
			dato = funciones.datosApriori(9)
			console.log(dato.url_image)
			console.log(dato.email)
			
			
			
			
		 cy.visit('http://localhost:2370/ghost/#/settings/integrations/slack')	
         cy.get('input[name="slack[url]"]').focus().clear().type(dato.url_image)
         cy.get('input[name="slack[username]"]').focus().clear().type(dato.email)
         cy.contains('span', 'Save').first().click({force:true})
 
		 
      })
	  
	  
	}
   })  
