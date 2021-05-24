const funciones = require('../funciones')
const data = require('../data')
var dato


describe('Crear tag en pagina inicial', () => {
    before(()=>{
		funciones.consumeRest()
		cy.wait (3000)
       
        
    })
	
	for (let i = 0; i< 9; i++){
	


	
	it('Crear pagina ', () => {
		funciones.login('g_publica_post_schedule')
			dato = funciones.getjsonrta(i)
			console.log(dato.name)
	
	     
		 cy.get('a[href="#/pages/"]').first().click()
		// cy.wait(3000)		 
		 cy.get('a[href="#/editor/page/"]').first().click()
		// cy.wait(3000)		 
		 cy.get('textarea[placeholder="Page Title"]').focus().type(dato.name)
		 cy.get('.koenig-editor__editor').click({force:true})
		 cy.visit(data.urlbase+'#/pages')
		 cy.wait(3000)		 
		 cy.get('a[title="Edit this page"').first().click({force:true})
		 cy.get('.koenig-editor__editor').type(dato.name)
		 cy.contains('span', 'Publish').click({force:true})
		 //cy.contains('span', 'Publish').click({force:true})
		 cy.get('a[href="#/pages/"]').first().click()
		 cy.wait(1000)		 
		 cy.contains('span', 'Leave').click({force:true})
		 
		 
		 		 
      })
	  
	}
   })  
      	
