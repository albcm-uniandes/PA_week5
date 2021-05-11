describe('Editar y publicar tag', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        cy.wait(4000)
        
    })
	
	it('Editar tag', () => {
		 cy.login()
		 cy.wait(3000)
		 cy.get('a[href="#/tags/"]').first().click()
		 cy.wait(3000)		 
		 cy.get('a[title="Edit tag"').first().click({force:true})
		 cy.wait(4000)		 
		 cy.get('#tag-name').click({force:true})
		 cy.get('#tag-name').type('Nombre actualizacion tag 2')
		 cy.get('#tag-slug').click({force:true})
		 cy.get('#tag-slug').type('Nombre actualizacion slug 2')
		 cy.get('#tag-description').click({force:true})
		 cy.get('#tag-description').type('Nombre actualizacion description 2')
		 cy.get('#meta-title').click({force:true})
		 cy.get('#meta-title').type('Nombre actualizacion metaTitle 2')
		 cy.get('#meta-description').click({force:true})
		 cy.get('#meta-description').type('Nombre actualizacion metaDescription 2')
		 cy.contains('span', 'Save').click({force:true})
		 cy.get('a[href="#/tags/"]').first().click({force:true})
	
  })	  
		
})
