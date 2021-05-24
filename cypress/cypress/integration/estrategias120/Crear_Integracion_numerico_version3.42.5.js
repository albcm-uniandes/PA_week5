const funciones = require('../funciones')
const data = require('../data')
var dato

describe('Crear integracion', () => {
    beforeEach(()=>{
		funciones.consumeRestUrl(data.crearIntegracion)
		cy.wait (3000)
       
        
    })
	
	 for (let i = 0; i< 5; i++){
		
		
	
	it('Crear integracion en pagina inicial', () => {
		funciones.login('g_publica_post_schedule')
				
			dato = funciones.getjsonrta(i)
			console.log(dato.titulo)
			 
		 cy.get('a[href="#/settings/integrations/"]').first().click()
		 //funciones.screenshot('CrearIntegracion_')
		 cy.get('a[href="#/settings/integrations/new/"]').first().click()
		 //funciones.screenshot('CrearIntegracion_')
		 cy.get('#new-integration-name').type(dato.titulo)
		 //funciones.screenshot('CrearIntegracion_')
		 cy.contains('span', 'Create').click({force:true})
		 //funciones.screenshot('CrearIntegracion_')
		 cy.get('a[href="#/settings/integrations/"]').first().click()
		 //funciones.screenshot('CrearIntegracion_')
		 
		 
		 
      })
	  
	} 

})
