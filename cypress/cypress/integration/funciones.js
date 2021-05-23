const data = require('./data')
const faker = require('faker')

let contador = 1
let jsonrta 

/**
 * Métod que retorna un conjunto de datos para 1 caso de prueba
 * @param {*} indice 
 * @returns 
 */
export function getjsonrta(indice){
    return jsonrta[indice]
}
/**
 * Método para retornar una estructura de datos para los casos de prueba
 * */
export function getjsonrtaT(){
    //console.log("!! "+jsonrta)
    return jsonrta
}
/**
 * Método usado para generar screenchot con un nombre específico y con identificado que se incrementa
 * @param  nombre 
 */
export function screenshot (nombre){
    cy.wait(2000)
    cy.screenshot(nombre + ' ' + contador)
    contador++
}

export function login (nombre){
    
    cy.visit(data.urllogin)
			
    cy.get('[id^=login]').within(() => {
        
        cy.get('input[name="identification"]').type(data.email)
        cy.get('input[name="password"]').type(data.password)
        cy.root().submit()
        cy.wait(2000)
        //cy.screenshot(nombre + ' 0 ')
    })
}
/**
 * Metodo que consume una estructura de datos JSON que se aloja en Mockaroo con datos básicos 
 * { titulo     :"",
 *   contenido  :"" 
 * }
 * Y otros datos para las diferentes pruebas
 */
export function consumeRest(){
    
    cy.request('GET', 'https://api.mockaroo.com/api/7568f7a0?count=20&key=5849ce80').then ((respuesta) =>{
        expect(respuesta.status).equal(200)
        console.log(respuesta.body)
        jsonrta = respuesta.body
       
        
    });
    

/*
    cy.request('GET','/users?page=2').then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.data[0].first_name).equal('Michael')
        expect(response.body).to.not.be.null
        expect(response.body.data).to.have.length(6)
    })
*/
}
/**
 * Datos generados con faker en una estructura JSON para ser usada en las diferentes pruebas
 */
export function generarFaker(){
    var datos = []
    datos.push({
        titulo: faker.lorem.sentence(),
        contenido: faker.lorem.text() ,
        url: "https://www.youtube.com/watch?v=czniWbRREz4"  })    
    datos.push({
        titulo: null,
        contenido: faker.lorem.text() ,
        url: null  })    
    datos.push({
        titulo: faker.lorem.word(),
        contenido: faker.lorem.text() ,
        url: "https://www.youtube.com/watch?v="+faker.random.word()  })    
    datos.push({
        titulo: null,
        contenido: faker.lorem.text() ,
        url: "https://www.youtube.com/watch?v="+faker.random.word()  })    
        
    jsonrta = datos
    console.log (jsonrta)
                    
    
    
}