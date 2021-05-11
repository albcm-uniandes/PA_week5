describe('Borrar tag', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        cy.wait(4000)
        
    })
	
	it('Eliminar tag en pagina inicial', () => {
		 cy.login()
		 cy.wait(3000)
		 cy.get('a[href="#/tags/"]').first().click()
		 cy.wait(3000)		 
		 cy.get('a[title="Edit tag"').first().click({force:true})
		 cy.contains('span', 'Delete').click({force:true})
		 cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click()
		 cy.wait(2000)		 
	
  })	  
		
})
