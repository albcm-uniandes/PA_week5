const funciones = require('../funciones')
const data = require('../data')


describe('Borrar tag', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
		funciones.screenshot('BorrarTag_')
        
    })
	
	it('Eliminar tag en pagina inicial', () => {
		 funciones.login()
		 funciones.screenshot('BorrarTag_')
		 cy.get('a[href="#/tags/"]').first().click()
		 funciones.screenshot('BorrarTag_')
		 cy.get('a[title="Edit tag"').first().click({force:true})
		 funciones.screenshot('BorrarTag_')
		 cy.contains('span', 'Delete').click({force:true})
		 funciones.screenshot('BorrarTag_')
		 cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click()
		 funciones.screenshot('BorrarTag_')
	
  })	  
		
})
