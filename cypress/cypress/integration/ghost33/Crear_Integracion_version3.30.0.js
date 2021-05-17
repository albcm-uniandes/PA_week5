const funciones = require('../funciones')
const data = require('../data')
describe('Crear integracion', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        funciones.screenshot('CrearIntegracion_')
        
    })
	
		
	
	it('Crear integracion en pagina inicial', () => {
		 funciones.login()
		 funciones.screenshot('CrearIntegracion_')
		 cy.get('a[href="#/settings/integrations/"]').first().click()
		 funciones.screenshot('CrearIntegracion_')
		 cy.get('a[href="#/settings/integrations/new/"]').first().click()
		 funciones.screenshot('CrearIntegracion_')
		 cy.get('#new-integration-name').type('Creacion integracion 7')
		 funciones.screenshot('CrearIntegracion_')
		 cy.contains('span', 'Create').click({force:true})
		 funciones.screenshot('CrearIntegracion_')
		 cy.get('a[href="#/settings/integrations/"]').first().click()
		 funciones.screenshot('CrearIntegracion_')
		 
		 
		 
      })

})
