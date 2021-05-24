const funciones = require('../funciones')
const data = require('../data')
var dato


describe('Editar General', () => {
    before(()=>{
		funciones.consumeRest()
		cy.wait (3000)
       
        
    })
	
	for (let i = 0; i< 1; i++){
		
	it('Invitar people en pagina inicial', () => {
		funciones.login('g_publica_post_schedule')
			dato = funciones.datosApriori(8)
			console.log(dato.name)
			
		 cy.get('a[href="#/settings/general/"]').first().click()
		 cy.contains('span', 'Expand').first().click({force:true})
		 cy.get('input[class^="ember-text-field gh-input ember-view"]').first().focus().clear().type(dato.name)
		 cy.get('input[class^="ember-text-field gh-input ember-view"]').last().focus().clear().type(dato.contenido)
		 cy.contains('span', 'Save settings').click({force:true})
		 
		 
		 
      })
	  
	}
   })  
