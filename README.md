# PA_week5
Repositorio que incluye (i) código de los 20 escenarios de prueba hechos tanto con Kraken como con la herramienta de su elección y siguiendo los patrones vistos, (ii) listado de funcionalidades y escenarios seleccionados para pruebas, (iii) resumen de pros y contras de las herramientas en la wiki del repo

# Integrantes
- ALBEIRO JOSE CUADRADO MACHADO (a.cuadrado@uniandes.edu.co)
- JUAN CAMILO ACEVEDO BEDOYA (j.acevedob@uniandes.edu.co)
- CESAR ALBERTO CHEMBI VERGARA (c.chembi@uniandes.edu.co)
- GIOVANNY ALEXANDER BRICEÑO RIVEROS (g.briceno@uniandes.edu.co)


# Funcionalidades Bajo prueba

1. Busqueda
- Permite buscar recursos como posts, users y tags dentro del dashboard administativo

2. Gestionar post
- Permite utilizar la funcionalidad core del sistema crear, editar, eliminar post

3. Gestion de staff
- Permite editar la información basica de los perfiles del sistema e invitar a usuarios a gestionar el sitio, con diferentes roles.

4. Gestionar pagina
- Permite al creador de contenido y administrador crear, editar o eliminar paginas en el sitio

5. Gestionar tag
- Permite crear, editar, eliminar etiquetas para posteriormente añadirlos a los post

6. Crear integración
- Permite crear integraciones con  software de terceros a nuestro sitio

7. Gestionar diseño
- Permite personalizar mediante esta funcionalidad el diseño del sitio

# Recursos
Enlace a Dropbpx ( Videos, screenshots etc) https://www.dropbox.com/sh/7s5cxbn9cuwu6du/AABgVKLmjXEsf8HLtPvB7dPja?dl=0

# Descripción de escenarios
| Descripción                                         | Responsable      | Columna por definir| Feature | Nombre archivo|
|-----------------------------------------------------|------------------|----------------------------------|-------------|-----|
| 1. Escenario positivo busqueda de post              | Albeiro Cuadrado |                              | Busqueda |search_post_OK.feature|
| 2. Escenario negativo editar campo de información de usuario con más de 255 caracteres            | Albeiro Cuadrado |                              | Editar información perfil de usuario |edit_field_more_than_255.feature|
| 3. Escenario positivo busqueda de tag             | Albeiro Cuadrado |                              | Busqueda |search_tag_OK.feature|
| 4. Escenario negativo busqueda de post inexistente            | Albeiro Cuadrado |                              | Busqueda |search_unexistent_post.feature|
| 5. Escenario positivo editar información perfil de usuario             | Albeiro Cuadrado |                                 | Editar información perfil|edit_field_on_profile.feature|
| 6. Crear post        | Giovanny Briceño |                                  | Crear post que se publique fecha posterior | g_crearpost_pb.spec.js| 
| 7. Despublicar post                       | Giovanny Briceño |                                  | Editar post y despublicar | g_despublicarpost.spec.js|
| 8. Invitar usuario                                  | Cesar Chembi     |                                 | Invitar usuario|Invitar_Nuevo_Usuario.feature Invitar_Nuevo_Usuario.js| 
| 9. Crear pagina       | Juan Camilo Acevedo |                              | Crear pagina que se publique inmediatamente|pagina.feature Crear_pagina.js| 
| 10. Crear tag                                        | Cesar Chembi     |                                 | Crear Tag|Crear_Tag.feature Crear_Tag.js| 
| 11. Eliminar tag                                     | Cesar Chembi     |                                 | Eliminar tag |Borrar_Tag.feature Borrar_Tag.js| 
| 12. Borrar pagina                                    | Juan Camilo Acevedo|                               | Borrar pagina|eliminarPagina.feature Eliminar_pagina.js| 
| 13. Borrar el post                      | Giovanny Briceño |                                  | Borrar post publicado más reciente | g_borrarpost.spec.js borrarpost.feature|
| 14. Gestionar diseño       | Giovanny Briceño |                                 | Adicionar un link de navegación al Diseño | g_adicionarLinkNavegar.js           | 
| 15. Gestionar diseño          | Giovanny Briceño |                                 |Borrar un link de navegacion en Diseño|       | 
| 16. Crear una integración                           | Cesar Chembi     |                                | Crear integración|Crear_Integracion.feature Crear_Integracion.js|
| 17. Editar Tag y publicarlo                         | Cesar Chembi     |                                | Editar tag|Editar_Publicar_Tag.feature Editar_Publicar_Tag.js| 



 

