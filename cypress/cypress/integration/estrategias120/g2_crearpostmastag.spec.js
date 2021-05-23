const funciones = require('../funciones')
const data = require('../data')


var dato
describe('Crear posts y adicionar un tag', () => {
    before(()=>{
		funciones.consumeRest()
		cy.wait (3000)
       
    })
	
    for (let i = 0; i< 7; i++){
		
		it('Usa datos del pool en JSON - 7 primeros', ()=>{
			
			funciones.login('g_publica_post_schedule')
				
			dato = funciones.datosApriori(i)
			console.log(dato.titulo +" "+dato.contenido)
			
			cy.get('li.gh-nav-list-new.relative').click()
			
			cy.get('a[href*="#/editor/post/"]').first().click()
			
			cy.get('textarea[placeholder="Post Title"]').type(dato.titulo)
			
			cy.get('.koenig-editor__editor').click({force:true})
			
			cy.visit(data.urlpostupdate);
	
			cy.wait(1000)
			
			cy.get('a[title="Edit this post"').first().click({force:true})
	
			cy.get('.koenig-editor__editor').type(dato.contenido)
	
			cy.get('textarea[placeholder="Post Title"]').click({force:true})
	
			cy.contains('span', 'Publish').click({force:true})
			 
			cy.get('div[class^="gh-publishmenu-radio"]').first().click({force:true})
			
			cy.contains('span', 'Publish').click({force:true})

			cy.get('.post-settings').click({force:true})

			cy.get('.post-settings').click({force:true})

			cy.get('div[id^="tag-input"]').first().click({force:true})
			cy.get('div[id^="tag-input"]').type('{downarrow}')
			cy.get('[aria-current="true"]').click()
			//cy.get('div[id^="tag-input"]').click()
			//cy.get('div[id^="custom-excerpt"]').focus().type('Sin verguenza')
			cy.get('#custom-excerpt').focus().type(dato.contenidotag)	

			cy.get('[aria-current="true"]').click()
	
			cy.wait (1000)

			cy.visit(data.urlpostpublish );
			cy.visit(data.urlGoshSite );
			

				 
		})
	}
    
	
	
  })



