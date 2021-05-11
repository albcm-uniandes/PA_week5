describe('Eliminar pagina', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        cy.wait(4000)
        
    })
	
	it('Borrar pagina', () => {
         cy.login()
		 cy.wait(3000)
		 cy.get('a[href="#/pages/"]').first().click()
		 cy.get('a[title="Edit this post"').first().click({force:true})
		 cy.get('button[class^="post-settings"]').first().click() 
		 cy.contains('span', 'Delete').click({force:true})
		 cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click()
		 cy.wait(2000)		 
		 cy.visit('http://localhost:2368/ghost/#/pages?order=updated_at%20desc')
		
      })
	  
 }) 
	  
	  


