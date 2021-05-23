const funciones = require('../funciones')
const data = require('../data')
const faker = require('faker')
var dato

describe('Cambiar el nombre del usuario autenticado ', () => {
    beforeEach(()=>{
		
    })
	it('Variar los valores del campo de nombre Faker', ()=>{
		funciones.login('g_cambiar nombre autenticado ')
		
		cy.get('li.gh-nav-list-new.relative').click()
		
		cy.get('div.flex-auto.flex.items-center').click({force:true})
		
		cy.contains('a','Your Profile').first().click({force:true})
		
		cy.get('input[id="user-name"]').click({force:true})
		
		cy.get('input[id="user-name"]').type('{del}{selectall}{backspace}'+faker.name.firstName())
		
		cy.contains('span', 'Save').click({force:true})
		
	})
	it('Variar los valores del campo de nombre null', ()=>{
		funciones.login('g_cambiar nombre autenticado ')
		
		cy.get('li.gh-nav-list-new.relative').click()
		
		cy.get('div.flex-auto.flex.items-center').click({force:true})
		
		cy.contains('a','Your Profile').first().click({force:true})
		
		cy.get('input[id="user-name"]').click({force:true})
		
		cy.get('input[id="user-name"]').type('{del}{selectall}{backspace}'+null)
		
		cy.contains('span', 'Save').click({force:true})
		
	})
	it('Variar los valores del campo de nombre cadena vacia', ()=>{
		funciones.login('g_cambiar nombre autenticado ')
		
		cy.get('li.gh-nav-list-new.relative').click()
		
		cy.get('div.flex-auto.flex.items-center').click({force:true})
		
		cy.contains('a','Your Profile').first().click({force:true})
		
		cy.get('input[id="user-name"]').click({force:true})
		
		cy.get('input[id="user-name"]').type('{del}{selectall}{backspace}')
		
		cy.contains('span', 'Save').click({force:true})
		
	})
	
	
	
  })
