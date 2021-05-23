const funciones = require('../funciones')
const data = require('../data')
var dato

describe('Crear post con url youtube', () => {
    before(()=>{
       cy.visit('http://localhost:2369/ghost/#/signin')
	   funciones.generarFaker()
	   cy.wait (3000)

    })
	
    for (let i = 0; i< 4; i++){
		it('Ingresa url de youtube', ()=>{

			dato = funciones.getjsonrta(i)
			//console.log(dato.titulo +" "+dato.contenido)
			
			funciones.login('g_publica_post_schedule_youtube')
			
			cy.get('li.gh-nav-list-new.relative').click()
			
			cy.get('a[href*="#/editor/post/"]').first().click()
		
			cy.get('textarea[placeholder="Post Title"]').type(dato.titulo)
			
			cy.get('.koenig-editor__editor').click({force:true})
			
			cy.visit(data.urlpostupdate);
			
			cy.get('a[title="Edit this post"').first().click({force:true})
			
			cy.get('.koenig-editor__editor').click({force:true})
			
			cy.get('.koenig-plus-menu-button').first().click({force:true})
			
			cy.get('[title="YouTube"] > .flex-column > .f8').click({force:true})
			
			cy.get('input[name=url]').click({force:true})		
			
			cy.get('input[name=url]').type(dato.url)
			
			cy.contains('span', 'Publish').click({force:true})
			
			cy.contains('span', 'Publish').click({force:true})
			
			cy.contains('a', 'View Post').click({force:true})

		})
	}	
	
  })
