
const funciones = require('../funciones')
const data = require('../data')

describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2369/ghost/#/signin')
		funciones.login('g_borrar_primer_post')
		funciones.screenshot('g_borrar_primer_post')
    })
    
    it('Borrar el primer post de la lista', ()=>{
		cy.get('li.gh-nav-list-new.relative').click()
		funciones.screenshot('g_borrar_primer_post')

		cy.visit('http://localhost:2369/ghost/#/posts?order=updated_at%20desc');
		funciones.screenshot('g_borrar_primer_post')

		cy.get('a[title="Edit this post"]').first().click({force:true})
		funciones.screenshot('g_borrar_primer_post')

		cy.get('.post-settings').click({force:true})
		funciones.screenshot('g_borrar_primer_post')

		cy.contains('span', 'Delete').click({force:true})
		funciones.screenshot('g_borrar_primer_post')

		cy.get('button > span').last().click({force:true})
		funciones.screenshot('g_borrar_primer_post')

		cy.get('button > span').last().click({force:true})
		funciones.screenshot('g_borrar_primer_post')
		
			
    })
	
	
  })