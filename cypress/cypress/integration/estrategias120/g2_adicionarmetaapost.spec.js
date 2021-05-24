const funciones = require('../funciones')
const data = require('../data')


var dato
describe('Crear posts y adicionar un Meta', () => {
    before(()=>{
		funciones.generarFakerCasoMeta()
		cy.wait (3000)
       
    })
	
    for (let i = 0; i< 9; i++){
		
		it('Crear posts y adicionar un Meta', ()=>{
			
			funciones.login('Crar post y adicionar un meta')
				
			dato = funciones.getjsonrta(i)
			//console.log(dato.titulo +" "+dato.contenido)
			
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
			cy.wait(3000)

			cy.get('.post-settings').click({force:true})

			cy.get('.post-settings').click({force:true})

			cy.contains('button', 'Meta data').click({force:true})
			

			cy.get('#meta-title').type(dato.titMeta)
			cy.get('#meta-description').type(dato.conMeta)

			cy.get('input[name^="post-setting-canonicalUrl"]').type(dato.url)
				
	
			cy.wait (1000)

			
			

				 
		})
	}
    
	
	
  })



