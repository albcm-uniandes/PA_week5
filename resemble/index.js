const compare = require("resemblejs").compare;
const config = require("./config.json");
const fs = require('fs');
const { options, foldersForComparison, comparisonReport } = config;
let data_array = []
let index = 0

async function executeTest(){
  let folders = config.foldersForComparison;
  if (!fs.existsSync('./resultados/')){
    fs.mkdirSync('./resultados');
  }


  folders.forEach ( folder => {

    let files = fs.readdirSync(folder.from);
    console.log(files);
    
    let item = []
    files.map ( async file => {
      
      let fileFrom = folder.from + file;
      let fileTo = folder.to + file;
      let fileCompared = file;
      let fileSaved = 'resultados/'
      console.log(fileCompared)
      
      compare(fileFrom, fileTo, options, function(err, data) {
        if (err) {
          console.log("Los archivos para comparar no tienen las mismas caracteristicas");
        }
        else {
          fs.writeFileSync(fileSaved + file, data.getBuffer());
          item.push([fileFrom, fileTo, fileCompared, data, file])
        }
      });
    });
    data_array.push([folder.scenario, item])

  });
}

function createReport() {
  let filename = 'resultados/reporte.html'

  fs.writeFileSync(filename, `
  <html>
    <head>
      <title> VRT Reporte Cypress </title>
      <link href="index.css" type="text/css" rel="stylesheet">
    </head>
    <body>
      <h1 style="text-align: center">REPORTE REGRESIÓN VISUAL CYPRESS</h1>
      ${data_array.map( data => rowScenario(data) )}
    </body>
  </html>`);

  fs.copyFileSync('./index.css', `./resultados/index.css`);
}

function  rowScenario (data) {
  index = index + 1;
  
  return `
  <div>
    <h2 style="text-align: center">Escenario: ${data[0]} </h2>
    ${data[1].map(item => rowComparation(item))}
  </div>`
}

function  rowComparation(elem) {
  return `<div class="browser">
    <div class=" btitle">
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">IMAGEN</span>
        <pre>${elem[4]}</pre>
      </div>
      <div class="imgcontainer">
        <span class="imgname">3.3.0</span>
        <img class="img2" src="${elem[0]}" id="refImage" label="3.3.0">
      </div>
      <div class="imgcontainer">
        <span class="imgname">3.42.5</span>
        <img class="img2" src="${elem[1]}" id="testImage" label="3.42.5">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="img2" src="${elem[2]}" id="diffImage" label="Diff">
      </div>
      <div class="imgcontainer">
        <span class="imgname">RESULTADO COMPARACIÓN</span>
        <pre>
          Porcentaje: ${elem[3].misMatchPercentage} %
        </pre>
      </div>
    </div>
  </div>`;
}

(async () => {
  await executeTest();
  createReport();
})();