const funciones = require('../funciones')
const data = require('../data')
const faker = require('faker')
var datos = []
describe('Adicionar un link al navegar', () => {
    beforeEach(()=>{
        datos.push({valor: faker.lorem.sentence()}) 
        datos.push({valor: faker.lorem.text()}) 
        datos.push({valor: ""}) 
        datos.push({valor: null}) 
        datos.push({valor: undefined}) 

    })
    for (let i = 0; i< 5; i++){
        it('Adicionar un link al navegar ', ()=>{
            funciones.login('Adicionar un link al navegar')
            cy.get('a[href^="#/settings/design"]').first().click()
            
            cy.get('form[id*="settings-navigation"]').within(() => {
                cy.get('input[placeholder="Label"]').last().click({force:true}).type(datos[i].valor)		
                
            })    
            cy.contains('span', 'Save').click({force:true})
                
        })
    
    }    
	
  })