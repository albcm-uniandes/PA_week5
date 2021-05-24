const funciones = require('../funciones')
const data = require('../data')
const faker = require('faker')
var dato

describe('Editar y publicar tag', () => {
    before(()=>{
	    funciones.generarFaker()
		cy.wait (3000)
           
    })
	
	
	for (let i = 0; i< 1; i++){
	

	it('Editar tag ', () => {
		funciones.login('g_publica_post_schedule')
			dato = funciones.getjsonrta(i)
			//console.log(dato.titulo)
	
	
    
		 cy.get('a[href="#/tags/"]').first().click()
		 cy.wait(3000)		 
	
		 cy.get('a[title="Edit tag"').first().click({force:true})
		 cy.wait(4000)		 
		 
		 
		 //cy.get('input[name="name"]').focus().clear().type(faker.lorem.word())
		 //cy.get('input[name="slug"]').focus().clear().type(faker.lorem.word())
		 
		 cy.get('#tag-name').focus().clear().type(faker.lorem.word())
		 cy.get('#tag-slug').focus().clear().type(faker.lorem.text())
		 cy.get('#tag-description').focus().clear().type(faker.lorem.sentence())
		 
		 
		 //cy.get('#tag-name').focus().clear().type('noooooooooooooooooooobre')
		 //cy.get('#tag-slug').focus().clear().type('sluuuuuuuuuuuuuuuuuuuuuuuuug')
		 //cy.get('#tag-description').focus().clear().type('descripcionnnnnnnnnnnnnnnnnnnnnnn')
		 
		 
		 
		 
		 cy.contains('span', 'Save').click({force:true})
		 cy.get('a[href="#/tags/"]').first().click({force:true})
		 		 
      })
	} 
	
  })	  
		

