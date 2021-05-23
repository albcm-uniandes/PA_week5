const funciones = require('../funciones')
const data = require('../data')


var dato
describe('Crear y publicar un post tiempo despues', () => {
    before(()=>{
		funciones.consumeRest()
		cy.wait (3000)
       
    })
	
    for (let i = 0; i< 5; i++){
		
		it('Usa datos Mockaroo', ()=>{
			
			funciones.login('g_publica_post_schedule')
				
			dato = funciones.getjsonrta(i)
			console.log(dato.titulo +" "+dato.contenido)
			
			cy.get('li.gh-nav-list-new.relative').click()
			
			cy.get('a[href*="#/editor/post/"]').first().click()
			
			cy.get('textarea[placeholder="Post Title"]').type(dato.titulo)

			cy.get('.koenig-editor__editor').click({force:true})
			
			cy.visit(data.urlpostupdate);
	
			cy.get('a[title="Edit this post"').first().click({force:true})
	
			cy.get('.koenig-editor__editor').type(dato.contenido)
	
			cy.get('textarea[placeholder="Post Title"]').click({force:true})
	
			cy.contains('span', 'Publish').click({force:true})
			 
			cy.get('div[class^="gh-publishmenu-radio"]').last().click({force:true})
			
			cy.contains('span', 'Schedule').click({force:true})
	
			cy.visit(data.urlpostsckedule );
			
			cy.wait (1000)
				 
		})
	}
    
	
	
  })



