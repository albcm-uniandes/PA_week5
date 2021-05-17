Para ejecutar las pruebas de comparación visual se deben seguir los siguientes 
procedimientos

1. Configurar el ambiente

* Crear la carpeta donde se realizara la prueba
* Ingresar a la carpeta
* Ejecutar el comando npm init

2. Instalar las dependencias con npm install resemblejs

3. En la carpeta del proyecto realizar los siguientes pasos

* Copiar los archivos config.json, index.css, index.js en la carpeta del proyecto
* Crear la carpeta escenarios

4. Copiar en la carpeta escenarios las carpetas que contienen las imagenes
para comparar. Se debe tener una carpeta para el primer grupo de imagenes
y otra para el segundo grupo

5. Configurar las pruebas en el archivo confing.json agregando los siguientes 
elementos por cada comparación que se desee hacer. Se muestra un ejemplo

{
	"scenario" : "Crear post YouTube",
	"from": "C:/resemble/escenarios/g1_crearpost_youtube.spec.js/",
	"to": "C:/resemble/escenarios/g2_crearpost_youtube.spec.js/",
	"compared": "../resultados/",
	"id": 0
},

Scenario -> Nombre de la prueba
from	 -> Carpeta que contiene las primeras imagenes para comparar
to		 -> Carpeta que contiene las segundas imagenes para comparar

6. Ejecutar el comando node index.js para realizar la comparación de las imagenes

7. En la carpeta que se acaba de crear llamada "resutaldos" buscar el archivo
reporte.html y abrirlo

