const funciones = require('../funciones')
const data = require('../data')

describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
	   
		funciones.login('g_despublica_un_post')//cy.autenticar()
		funciones.screenshot('g_despublica_un_post')
    })
    
    it('Se despublica un Posts', ()=>{
		cy.get('li.gh-nav-list-new.relative').click()
		funciones.screenshot('g_despublica_un_post')
		

		cy.visit('http://localhost:2368/ghost/#/posts?type=published');
		funciones.screenshot('g_despublica_un_post')
		
		cy.get('a[title="Edit this post"]').first().click({force:true})
		funciones.screenshot('g_despublica_un_post')
		
		cy.contains('span', 'Update').click({force:true})
		funciones.screenshot('g_despublica_un_post')

		cy.get('div[class^="gh-publishmenu-radio"]').first().click({force:true})
		funciones.screenshot('g_despublica_un_post')
		
		cy.contains('span', 'Unpublish').click({force:true})
		funciones.screenshot('g_despublica_un_post')
		
		cy.visit('http://localhost:2368/ghost/#/posts?type=draft');
		funciones.screenshot('g_despublica_un_post')
			
    })
	
	
  })