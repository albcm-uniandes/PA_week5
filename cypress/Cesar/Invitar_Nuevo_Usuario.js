describe('Invitar nuevo Usuario', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        cy.wait(4000)
        
    })
	
	it('Invitar people en pagina inicial', () => {
		 cy.login()
		 cy.wait(3000)
		 cy.get('a[href="#/staff/"]').first().click()
		 cy.wait(3000)		 
		 cy.contains('span', 'Invite people').click({force:true})
		 cy.wait(3000)		 
		 cy.get('input[name="email"]').type('cesar.chembi@gmail.com')
		 cy.contains('span', 'Send invitation now').click({force:true})
		 cy.reload()
		 
      })
   })  
