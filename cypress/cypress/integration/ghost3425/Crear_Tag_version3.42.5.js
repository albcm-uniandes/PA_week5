const funciones = require('../funciones')
const data = require('../data')
describe('Crear Tag', () => {
    beforeEach(()=>{
	   cy.visit('http://localhost:2368/ghost/#/signin/')
	   cy.wait(4000)
	   funciones.screenshot('CrearTag_') 
    })
	
	it('Crear tag en pagina inicial', () => {
		 funciones.login()
		 funciones.screenshot('CrearTag_')
		 cy.wait(4000)
		 cy.get('a[href="#/tags/"]').first().click()
		 funciones.screenshot('CrearTag_')
		 cy.contains('span', 'New tag').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#tag-name').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#tag-name').type('Nombre tag 10')
		 funciones.screenshot('CrearTag_')
		 cy.get('#tag-slug').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#tag-slug').type('Nombre slug 2')
		 funciones.screenshot('CrearTag_')
		 cy.get('#tag-description').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#tag-description').type('Nombre description 2')
		 funciones.screenshot('CrearTag_')
		 cy.get('button[class="gh-btn gh-btn-expand"]').first().click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#meta-title').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#meta-title').type('Nombre metaTitle 2')
		 funciones.screenshot('CrearTag_')
		 cy.get('#meta-description').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#meta-description').type('Nombre metaDescription 2')
		 funciones.screenshot('CrearTag_')
		 cy.contains('span', 'Save').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('a[href="#/tags/"]').first().click({force:true})
		 funciones.screenshot('CrearTag_')
		 
      })
	  
		
})
