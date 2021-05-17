const funciones = require('../funciones')
const data = require('../data')

describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
	   /*
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('vinni9@gmail.com')
            cy.get('input[name="password"]').type('nohayclave1')
            cy.get('button[id=ember12]').click()
			cy.wait(1000)
			
        })        */
		funciones.login('g_publica_post_schedule')
		funciones.screenshot('g_publica_post_schedule')
    })
    
    it('Crear y publicar un post tiempo despues', ()=>{

		cy.get('li.gh-nav-list-new.relative').click()
		funciones.screenshot('g_publica_post_schedule')

		cy.get('a[href*="#/editor/post/"]').first().click()
		funciones.screenshot('g_publica_post_schedule')
		
		
		cy.get('textarea[placeholder="Post Title"]').type('Jugando con Cypress')
		funciones.screenshot('g_publica_post_schedule')

		cy.get('.koenig-editor__editor').click({force:true})
		funciones.screenshot('g_publica_post_schedule')
		
        cy.visit('http://localhost:2368/ghost/#/posts?order=updated_at%20desc');
		funciones.screenshot('g_publica_post_schedule')

		cy.get('a[title="Edit this post"').first().click({force:true})
		funciones.screenshot('g_publica_post_schedule')

		cy.get('.koenig-editor__editor').type('Contenido 009')
		funciones.screenshot('g_publica_post_schedule')

		cy.get('textarea[placeholder="Post Title"]').click({force:true})
		funciones.screenshot('g_publica_post_schedule')

		cy.contains('span', 'Publish').click({force:true})
		funciones.screenshot('g_publica_post_schedule')
		
		 
		cy.get('div[class^="gh-publishmenu-radio"]').last().click({force:true})
		funciones.screenshot('g_publica_post_schedule')
		 
		
		cy.contains('span', 'Schedule').click({force:true})
		funciones.screenshot('g_publica_post_schedule')

		cy.get('a[href*="#/posts/"]').first().click({force:true}) 
		funciones.screenshot('g_publica_post_schedule')

		cy.visit('http://localhost:2368/ghost/#/posts?order=updated_at%20desc&type=scheduled');
		funciones.screenshot('g_publica_post_schedule')
			 
    })
	
	
  })