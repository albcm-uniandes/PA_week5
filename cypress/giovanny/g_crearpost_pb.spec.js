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
		cy.autenticar()
    })
    
    it('Crear y publicar un post tiempo despues', ()=>{

		cy.get('li.gh-nav-list-new.relative').click()
		cy.get('a[href*="#/editor/post/"]').first().click()
		//cy.contains('span', 'New post').click()
		cy.wait(1000) 
		cy.get('textarea[placeholder="Post Title"]').type('Titulo 009')
		cy.get('.koenig-editor__editor').click({force:true})
		cy.wait(1000) 
		//cy.get('.post-settings').click({force:true})
        cy.visit('http://localhost:2368/ghost/#/posts?order=updated_at%20desc');
		cy.get('a[title="Edit this post"').first().click({force:true})
		cy.get('.koenig-editor__editor').type('Contenido 009')
		cy.get('textarea[placeholder="Post Title"]').click({force:true})
		cy.contains('span', 'Publish').click({force:true})
		
		 
		
		cy.get('div[class^="gh-publishmenu-radio"]').last().click({force:true})
		 
		//cy.get('.gh-date-time-picker-date > input').first().type('{del}{selectall}{backspace}2021-05-06')
		//cy.get('.gh-date-time-picker-time > input').first().type('{del}{selectall}{backspace}11:00')
		//cy.get('.gh-date-time-picker-time > input').last().type('11:00')
		
		cy.contains('span', 'Schedule').click({force:true})
		//
		cy.get('a[href*="#/posts/"]').first().click({force:true}) 
		cy.visit('http://localhost:2368/ghost/#/posts?order=updated_at%20desc&type=scheduled');
		//cy.contains('a', 'View Post').click({force:true})
			 
    })
	
	
  })