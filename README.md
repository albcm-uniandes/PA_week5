# Integrantes
- ALBEIRO JOSE CUADRADO MACHADO (a.cuadrado@uniandes.edu.co)
- JUAN CAMILO ACEVEDO BEDOYA (j.acevedob@uniandes.edu.co)
- CESAR ALBERTO CHEMBI VERGARA (c.chembi@uniandes.edu.co)
- GIOVANNY ALEXANDER BRICEÑO RIVEROS (g.briceno@uniandes.edu.co)

# RELEASE 1.0 Proyecto final
A continuación se describe el release que incluye:
1. Artefactos de código, la descripción e indicaciones de ejecución se encuentran en este readme, dependiendo la estrategia a reproducir. Al igual que todo el código necesario que lo soporta
2. El archivo final de la estrategía solicitada para la semana 8 se encuentra en la carpeta **release/estrategia** de este repositorio con el nombre **Estrategia.pdf** junto a los soportes que se referencian en ese documento.
3. El repositorio incluye el inventario de pruebas manuales: dentro de la carpeta **release/estrategia** con el nombre **inventario.xlsx**
4. El listado de incidencias se puede ver en la sección Issues, donde se describen 22 issues encontrado en la versión 3.42.5 de Ghost, mediante varias de las estrategias 
5. El video de 15 minutos con presentación de gerencia describiendo la estrategia y los resultados se encuentra en la carpeta **release** de este repositorio con el nombre **Video**

# REVISAR
**A continuación se muestra en la wiki**
[Información detallada de estrategía usada en cada escenario
](https://github.com/albcm-uniandes/PA_week5/wiki/Detalle-de-escenarios)

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


# Pruebas E2E
Repositorio que incluye (i) código de los 20 escenarios de prueba hechos tanto con Kraken como con la herramienta de su elección y siguiendo los patrones vistos, (ii) listado de funcionalidades y escenarios seleccionados para pruebas, (iii) resumen de pros y contras de las herramientas en la wiki del repo


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
| 6. Crear post que se publique fecha posterior        | Giovanny Briceño |   Gestionar posts  | g_crearpost_pb.spec.js g3.30.0crearpost_pb.feature| 
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
| 21. Editar redes sociales                           | Juan Camilo Acevedo     | Gestionar diseño | socialAccounts.js|
| 22. Convertir en privado el sitio                   | Juan Camilo Acevedo     | Gestionar diseño | private.feature private.js|


# Como ejecutar este ejercicio para KRAKEN
## Pasos previos
1. Haber realizado la instalación de KRAKEN ver https://github.com/TheSoftwareDesignLab/KrakenMobile
2. Tener instalado las versiones adecuadas de Ghost
3. Ejecutar la versión correspondiente de Ghost ingreseando al archivo del proyecto y ejecutar al comando ghost start
Por ejemplo para GHOST 3.3 ingresar a la carpeta usando el comando "cd ghost33" y luego dar la instrucción "ghost start"

## Pasos
1. Copiar la carpeta carpeta kraken/proyecto, dentro de la carpeta raiz donde realizó el setup de kraken
2. Escriba el siguiente comando en una terminal ubicado en la carpeta raiz del proyecto creado __bundle exec kraken-mobile run__

# Como ejecutar este ejercicio para Cypress
## Pasos previos
1. Haber realizado la instalación de CYPRESS ver https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements
2. Tener instalado las versiones adecuadas de Ghost
3. Ejecutar la versión correspondiente de Ghost ingreseando al archivo del proyecto y ejecutar al comando ghost start
Por ejemplo para GHOST 3.3 ingresar a la carpeta usando el comando "cd ghost33" y luego dar la instrucción "ghost start"

## Pasos
1. Ubiquese dentro del directorio __/cypress__ de este repositorio
2. Ejecutar en una terminal el comando  __cypress run --headed__
 

# Pruebas de regresión visual
Las pruebas efectuadas en la regresion visual son 

- BUSCAR POST
Se busca hallar diferencias visuales en la funcionalidad que permite realizar busqueda de contenidos

- CREAR POSTS YOUTUBE
Se busca hallar diferencias visuales en la funcionalidad que permite Crear post en el blog con contenido adjunto de youtube

- INVITAR NUEVO USUARIO
Se busca hallar diferencias visuales en la funcionalidad que permite añadir nuevos miembros al staff del sitio

- RENOMBRAR SITIO
Se busca hallar diferencias visuales en la funcionalidad que permite permite cambiar el nombre de nuestro sitio

- CAMBIAR ZONA HORARIA
Se busca hallar diferencias visuales en la funcionalidad que permite cambiar la zona horaria por defecto del sitio


# Estrategias de pruebas con la generación de datos aleatorios

Las estrategias usadas para los 120 escenarios incorporan :

- **Apriori**: 
    Se generaron con mockaroo unos datos que se guardaron en el archivo datosescenarios.json y se consumieron en algunos de los casos de prueba. 

- **Aleatorio** 

    Se generan datos usando directamente Faker en el momento de la ejecución.

- **Pseudo aleatorio** 
    Se genero un conjunto de datos en Mockaroo (url rest) que son consumidos en tiempo de ejecución en las casos de prueba. 
    
    Los enlaces de Mockaroo se adicionaron en el archivo cypress\cypress\integracion\data.json y se hace uso de ellos en archivo 
    cypress\cypress\integracion\funciones.json
    
    Además, Por ejemplo, los escenarios con campos vacios e inyecciones sql, se toma de los json: empty_data.json o sql_injection.js, para obtener los datos apriori, pero de manera aleatoria en tiempo de ejecución


Los archivos de pruebas y sus escenarios se encuentran en **cypress\cypress\integracion\estrategias120.**

La especificacion de los 120 escenarios se encuentrar descritos en el documento que se encuentra en el siquiente enlace. 

    https://uniandes-my.sharepoint.com/:x:/g/personal/g_briceno_uniandes_edu_co/EfX8kgJujqdLlcnX3-VzD9YB4TT2_tRGJ3WJbpl2pm3KZg?e=splySs

o accede desde aquí
[Generación aleatoria de datos Week 7
](https://github.com/albcm-uniandes/PA_week5/wiki/Estrategias-de-generaci%C3%B3n-aleatoria-de-datos)

Para el uso de Faker ejecute:
    npm i faker

Las incidencias encontradas se registraron en el repositorio con el prefijo *"Incidencias datos aleatorios caso #:"*

Las incidencias se encuentran en la sección Issues de este proyecto Github
