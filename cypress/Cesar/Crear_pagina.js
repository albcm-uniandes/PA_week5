describe('Crear Página', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        cy.wait(4000)
        
    })
	

	
	it('Crear pagina', () => {
		 cy.login()
		 cy.wait(3000)
		 cy.get('a[href="#/pages/"]').first().click()
		 cy.wait(3000)		 
		 cy.get('a[href="#/editor/page/"]').first().click()
		 cy.wait(3000)		 
		 cy.get('textarea[placeholder="Page Title"]').type('Prueba de creacion Pagina')
		 cy.get('.koenig-editor__editor').click({force:true})
		 cy.visit('http://localhost:2368/ghost/#/pages')
		 cy.wait(3000)		 
		 cy.get('a[title="Edit this post"').first().click({force:true})
		 cy.get('.koenig-editor__editor').type('Contenido del pagina 20')
		 cy.contains('span', 'Publish').click({force:true})
		 cy.contains('span', 'Publish').click({force:true})
		 cy.get('a[href="#/pages/"]').first().click()
		 cy.wait(3000)		 
		 cy.visit('http://localhost:2368/ghost/#/pages?order=updated_at%20desc')
		
		 
      })

})
