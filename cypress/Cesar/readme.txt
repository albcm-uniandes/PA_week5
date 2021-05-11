--------------------------------
Pasos para ejecutar kraken:

1) se debe copiar el archivo login.json en la raiz del proyecto
2) en este archivo se encuentra la configuración para modificar el usuario, el password, y la url de login de la aplicación.
4) se deben copiar los archivos : Invitar_Nuevo_Usuario.feature,  Crear_Integracion.feature, Crear_Tag.feature, Editar_Publicar_Tag.feature, Borrar_Tag.feature en la carpeta features
del proyecto.
3) se debe ejecutar las pruebas de la siguiente forma desde la raiz del proyecto ejemplo
   C:\KrakenMobile-1.0.9\proyecto2>bundle exec kraken-mobile run --properties="login.json"
   
----------------------------   
Pasos para ejecutar cypress:


1) se debe copiar el siguiente contenido en el archivo commands.js que se encuentra en la carpeta support

Cypress.Commands.add('login', () => { 
 cy.get('form').within(() => {
          cy.get('input[name="identification"]').type('cesar44@gmail.com')
          cy.get('input[name="password"]').type('admin123456')
          cy.get('button[id="ember12"]').click()
 })

})

2) A continuación se modifica el parámetro identification con el usuario en este caso es donde dice cesar44@gmail
3) A continuación se modifica el parámetro password con la contrasena  en este caso es donde dice admin123456
4) se deben copiar los archivos : Invitar_Nuevo_Usuario.js,  Crear_pagina.js, Crear_Integracion.js, Crear_Tag.js, Editar_Publicar_Tag.js, Eliminar_pagina.js, Borrar_Tag.js en la carpeta integration
   del proyecto.
3) se debe ejecutar las pruebas de la siguiente forma desde la raiz del proyecto ejemplo
   C:\prueba_cypress\cypress>cypress open 
4) Se abrirá una ventana con los archivos de prueba previamente agregados y se podran ejecutar desde el INTEGRATION TEST cada uno de ellos.