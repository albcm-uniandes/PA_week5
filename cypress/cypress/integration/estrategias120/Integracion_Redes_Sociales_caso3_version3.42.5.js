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
			console.log(dato.email)
			
		 cy.get('a[href="#/settings/integrations/"]').first().click()
		 cy.get('div[class="apps-grid"]').first().click()
		 //cy.get('.apps-grid-cell').children(5).first().click()
		 cy.get('input[name="amp_gtag_id"]').focus().clear().type(dato.email)
		 //contains('#gh-setting-first.gh-setting-action.gh-btn').click({force:true})
		 cy.contains('span', 'Save').first().click({force:true})
		 //cy.get('input[placeholder="https://www.facebook.com/ghost"]').focus().clear().type('facebook')
		 //cy.get('input[placeholder="https://twitter.com/ghost"]').focus().clear().type('twitter')
		 
		 
		 
		 
      })
	  
	}
   })  
