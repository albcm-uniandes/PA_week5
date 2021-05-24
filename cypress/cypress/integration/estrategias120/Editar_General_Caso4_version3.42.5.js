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
			dato = funciones.datosApriori(2)
			console.log(dato.numero)
			
		 cy.get('a[href="#/settings/general/"]').first().click()
		 cy.contains('span', 'Expand').first().click({force:true})
		 cy.get('input[class^="ember-text-field gh-input ember-view"]').first().focus().clear().type(dato.numero)
		 cy.get('input[class^="ember-text-field gh-input ember-view"]').last().focus().clear().type(dato.numero)
		 cy.contains('span', 'Save settings').click({force:true})
		 
		 
		 
      })
	  
	}
   })  
