# Pruebas E2E
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

3. Gestionar staff
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
| Descripción                                         | Responsable      | Feature | Nombre archivo|
|-----------------------------------------------------|------------------|-------------|-----|
| 1. Escenario positivo busqueda de post              | Albeiro Cuadrado |  Busqueda |search_post_OK.feature search_post_OK.js|
| 2. Escenario negativo editar campo de información de usuario con más de 255 caracteres | Albeiro Cuadrado | Gestionar staff |edit_field_more_than_255.feature edit_field_more_than_255.js|
| 3. Escenario positivo busqueda de tag             | Albeiro Cuadrado |   Busqueda |search_tag_OK.feature search_tag_OK.js|
| 4. Escenario negativo busqueda de post inexistente            | Albeiro Cuadrado |  Busqueda |search_unexistent_post.feature search_unexistent_post.js|
| 5. Escenario positivo editar información perfil de usuario             | Albeiro Cuadrado |  Gestionar staff |edit_field_on_profile.feature edit_field_on_profile.js|
| 6. Crear post que se publique fecha posterior        | Giovanny Briceño |   Gestionar posts  | g_crearpost_pb.spec.js| 
| 7. De la lista de posts publicados, despublicar un posts                       | Giovanny Briceño |   Gestionar post  | g_despublicarpost.spec.js|
| 8. Invitar usuario                                  | Cesar Chembi     |  Gestionar staff|Invitar_Nuevo_Usuario.feature Invitar_Nuevo_Usuario.js| 
| 9.  Crear pagina que se publique inmediatamente      | Juan Camilo Acevedo |   Gestionar pagina |pagina.feature Crear_pagina.js| 
| 10. Crear tag                                        | Cesar Chembi     |     Gestionar tag |Crear_Tag.feature Crear_Tag.js| 
| 11. Eliminar tag                                     | Cesar Chembi     |   Gestionar tag |Borrar_Tag.feature Borrar_Tag.js| 
| 12. Borrar pagina                                    | Juan Camilo Acevedo|  Gestionar pagina|eliminarPagina.feature Eliminar_pagina.js| 
| 13. Borrar post de la lista de publicados, el más reciente    | Giovanny Briceño |  Gestionar post  | g_borrarpost.spec.js borrarpost.feature|
| 14. Adicionar un link de navegación al Diseño       | Giovanny Briceño |   Gestionar diseño  | g_adicionarLinkNavegar.js           | 
| 15. Crear Posts adicionando link youtube           | Giovanny Briceño |  Gestionar diseño| g2_crearpost_youtube.spec.js       | 
| 16. Crear una integración                           | Cesar Chembi     |     Crear integración|Crear_Integracion.feature Crear_Integracion.js|
| 17. Editar Tag y publicarlo                         | Cesar Chembi     |    Gestionar tag|Editar_Publicar_Tag.feature Editar_Publicar_Tag.js| 
| 18. Renombrar titulo del sitio                      | Juan Camilo Acevedo     | Gestionar diseño | renameSite.feature renameSite.js|
| 19. Editar el lenguaje de publicación               | Juan Camilo Acevedo     | Gestionar diseño | publicationLanguaje.feature publicationLanguaje.js|
| 20. Editar zona horaria                             | Juan Camilo Acevedo     | Gestionar diseño | siteTimeZone.js|


# Como ejecutar este ejercicio para KRAKEN
## Pasos previos
1. Haber realizado la instalación de KRAKEN ver https://github.com/TheSoftwareDesignLab/KrakenMobile

## Pasos
1. Copiar la carpeta carpeta kraken/proyecto, dentro de la carpeta raiz donde realizó el setup de kraken
3. escriba el siguiente comando en una terminal ubicado en la carpeta raiz del proyecto creado __bundle exec kraken-mobile run__

# Como ejecutar este ejercicio para Cypress
## Pasos previos
1. Haber realizado la instalación de CYPRESS ver https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

## Pasos
1 Ubiquese dentro del directorio __/cypress__ de este repositorio
2 Ejecutar en una terminal el comando  __cypress run --headed__
 

