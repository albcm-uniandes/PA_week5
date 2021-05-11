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
    
    it('Borrar ultima Navigation del Design', ()=>{
		cy.get('a[href^="#/settings/design"]').first().click()
		
		//cy.contains('div').should('have.class', 'gh-contentfilter-sort').click({force:true})
		//cy.visit('http://localhost:2368/ghost/#/posts?type=published');
		//cy.get('div[class^="gh-contentfilter-menu"]').last().click({force:true})	no sirve
		
		//cy.get('#ember122').click({force:true})
		//cy.get('li[class^="ember-power-select-option"]').click({force:true})	// no sirve
		//cy.get('[data-option-index="2"]').click({force:true}) // no sirve
		//cy.wait(7000)		
		//cy.contains('span', 'Update').click({force:true})
		//cy.get('#ember629 > span').first().click({force:true})
		//cy.get('button[class^=".gh-btn-icon.ember-view""]').click({force:true}) // no sirve
		//cy.get('input[class^="ember-text-field.gh-input.ember-view"]').last().type('estoes') // no sirve
		//cy.get('#ember91').type('estoes')
		
		cy.get('form[id*="settings-navigation"]').within(() => {
            cy.get('input[placeholder="Label"]').last().click({force:true}).type("Casiqueno")		
			
        })    
		cy.contains('span', 'Save').click({force:true})

		    
		//cy.contains('span', 'Save').click({force:true})
		//cy.get('input[class^="gh-input"]').type('XXX')
		
		//cy.contains('span', 'Unpublish').click({force:true})	
		//cy.visit('http://localhost:2368/ghost/#/posts?type=draft');
		
		//cy.get('.gh-btn.gh-btn-red [type="button"]').click();
		//cy.contains('span', 'Delete').click({force:true})
		//cy.contains('div', 'Delete post').click({force:true})
		//.click({force:true})
		//cy.get('div[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({force:true})
		//cy.get('div').should('have.class', 'gh-notification-content').click({force:true}) 
			
    })
	
	
  })