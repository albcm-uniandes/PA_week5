const funciones = require('../funciones')
const data = require('../data')


describe('Crear Tag', () => {
    beforeEach(()=>{
		
		cy.visit('http://localhost:2368/ghost/#/signin/')
        cy.wait(2000)
		
    })
	
	it('Crear tag en pagina inicial', () => {
		 funciones.login()
		 cy.wait(2000)
		 //cy.screenshot()
		 funciones.screenshot('CrearTag_')
		 	 
		 cy.get('a[href="#/tags/"]').first().click()
		 cy.wait(4000)
		 //cy.screenshot()
		 funciones.screenshot('CrearTag_')
		 cy.wait(4000)
		 cy.contains('span', 'New tag').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('#tag-name').click({force:true})
		 cy.get('#tag-name').type('Nombre tag 2')
		 
		 
		 cy.get('#tag-slug').click({force:true})
		 cy.get('#tag-slug').type('Nombre slug 2')
		 
		 
		 cy.get('#tag-description').click({force:true})
		 cy.get('#tag-description').type('Nombre description 2')
		 
		 
		 cy.get('#meta-title').click({force:true})
		 cy.get('#meta-title').type('Nombre metaTitle 2')
		 
		 
		 cy.get('#meta-description').click({force:true})
		 cy.get('#meta-description').type('Nombre metaDescription 2')
		 funciones.screenshot('CrearTag_')
		 
		 cy.contains('span', 'Save').click({force:true})
		 funciones.screenshot('CrearTag_')
		 cy.get('a[href="#/tags/"]').first().click()
		 
		 
		 
      })
	  
		
})
