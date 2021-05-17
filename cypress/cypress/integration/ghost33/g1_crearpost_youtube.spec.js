
const funciones = require('../funciones')
const data = require('../data')

describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
		funciones.login('g_publica_post_youtube')//cy.autenticar()
		funciones.screenshot('g_publica_post_youtube')
    })
    
    it('Crear post con contenido youtube', ()=>{

		cy.get('li.gh-nav-list-new.relative').click()
		funciones.screenshot('g_publica_post_youtube')
		
		cy.get('a[href*="#/editor/post/"]').first().click()
		funciones.screenshot('g_publica_post_youtube')
	
		cy.get('textarea[placeholder="Post Title"]').type('Esto es kraken')
		funciones.screenshot('g_publica_post_youtube')
		
		cy.get('.koenig-editor__editor').click({force:true})
		funciones.screenshot('g_publica_post_youtube')
        
		cy.visit('http://localhost:2368/ghost/#/posts?order=updated_at%20desc');
		funciones.screenshot('g_publica_post_youtube')
		
		cy.get('a[title="Edit this post"').first().click({force:true})
		funciones.screenshot('g_publica_post_youtube')
		
		cy.get('.koenig-editor__editor').click({force:true})
		funciones.screenshot('g_publica_post_youtube')			
		
		cy.get('.koenig-plus-menu-button').first().click({force:true})
		funciones.screenshot('g_publica_post_youtube')
		
		cy.get('.koenig-cardmenu > :nth-child(9)').click({force:true})
		funciones.screenshot('g_publica_post_youtube')
		
		cy.get('input[name=url]').click({force:true})		
		cy.get('input[name=url]').type('https://www.youtube.com/watch?v=czniWbRREz4')
		funciones.screenshot('g_publica_post_youtube')
		
		cy.contains('span', 'Publish').click({force:true})
		funciones.screenshot('g_publica_post_youtube')
		
		cy.contains('span', 'Publish').click({force:true})
		funciones.screenshot('g_publica_post_youtube')
		
		cy.contains('a', 'View Post').click({force:true})
		funciones.screenshot('g_publica_post_youtube')
		 
		
		
			 
    })
	
	
  })
