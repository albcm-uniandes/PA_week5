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
    
    it('Borrar el primer post de la lista', ()=>{
		cy.get('li.gh-nav-list-new.relative').click()
		//cy.contains('div').should('have.class', 'gh-contentfilter-sort').click({force:true})
		cy.visit('http://localhost:2368/ghost/#/posts?order=updated_at%20desc');
		//cy.get('div[class^="gh-contentfilter-menu"]').last().click({force:true})	no sirve
		
		//cy.get('#ember122').click({force:true})
		//cy.get('li[class^="ember-power-select-option"]').click({force:true})	// no sirve
		//cy.get('[data-option-index="2"]').click({force:true}) // no sirve
		//cy.wait(7000)		
		cy.get('a[title="Edit this post"]').first().click({force:true})
		cy.get('.post-settings').click({force:true})
		cy.contains('span', 'Delete').click({force:true})
		//cy.get('#ember629 > span').first().click({force:true})
		//cy.get('button[class^=".gh-btn-icon.ember-view""]').click({force:true})
		cy.get('button > span').last().click({force:true})
		cy.get('button > span').last().click({force:true})
		
		//cy.visit('http://localhost:2368/ghost/#/posts?order=updated_at%20desc');
		
		//cy.get('.gh-btn.gh-btn-red [type="button"]').click();
		//cy.contains('span', 'Delete').click({force:true})
		//cy.contains('div', 'Delete post').click({force:true})
		//cy.get('div[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({force:true})
		//cy.get('div[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({force:true})
		//cy.get('div').should('have.class', 'gh-notification-content').click({force:true}) 
			
    })
	
	
  })