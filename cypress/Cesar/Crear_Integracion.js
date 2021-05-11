describe('Crear integracion', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        cy.wait(4000)
        
    })
	
		
	
	it('Crear integracion en pagina inicial', () => {
		 cy.login()
		 cy.wait(3000)
		 cy.get('a[href="#/settings/integrations/"]').first().click()
		 cy.wait(3000)		 
		 cy.get('a[href="#/settings/integrations/new/"]').first().click()
		 cy.get('#new-integration-name').type('Creacion integracion 7')
		 cy.contains('span', 'Create').click({force:true})
		 cy.get('a[href="#/settings/integrations/"]').first().click()
		 
		 
		 
      })

})
