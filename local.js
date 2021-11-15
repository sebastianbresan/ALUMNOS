let bbdd = [];
let estadoid = false;
let estadoalumno = false;
let estadocursos = false;
let estadocertificados = false;
let estadotiempoestudio = false;
let estadorutaestudio = false;

class Alumno {
  constructor(_id, alumno, tiempoEstudio, cursos, certificados, rutaEstudio) {
    this._id = _id;
    this.alumno = alumno;
    this.tiempoEstudio = tiempoEstudio;
    this.cursos = cursos;
    this.certificados = certificados;
    this.rutaEstudio = rutaEstudio;
  }
}

function flocal() {
  
  let idinput = parseInt(document.getElementById(`id`).value);
  let alumnoinput = document.getElementById(`alumno`).value;
  let tiempoEstudio = parseInt(document.getElementById(`tiempoEstudio`).value);
  let cursos = parseInt(document.getElementById(`cursos`).value);
  let certificados = parseInt(document.getElementById(`certificados`).value);
  let rutaEstudio = parseInt(document.getElementById(`rutaEstudio`).value);


  if(alumnoinput == "") {
    alert("Debe rellenar el nombre correctamente");
  }
  else if (isNaN(tiempoEstudio)){
    alert("Debe rellenar el tiempo de estudio correctamente");
  }
  else if (isNaN(cursos)){
    alert("Debe rellenar los cursos correctamente");
  }
  else if (isNaN(certificados)){
    alert("Debe rellenar los certificados correctamente");
  }
  else if (isNaN(rutaEstudio)){
    alert("Debe rellenar el progreso correctamente");
  }

  else{
  const alumno = new Alumno(
    idinput,
    alumnoinput,
    tiempoEstudio,
    cursos,
    certificados,
    rutaEstudio
  );
  bbdd.push(alumno);
  document.getElementById(`tabla`).innerHTML +=
    `<tr class="fila1">
    <td>` +
    idinput +
    `</td>
    <td>` +
    alumnoinput +
    `</td>
    <td>` +
    tiempoEstudio +
    `</td>
    <td>` +
    cursos +
    `</td>
    <td>` +
    certificados +
    `</td>
    <td>` +
    rutaEstudio +
    `</td>
</tr>`;
  console.clear();
  console.log(bbdd);
  document.getElementById(`formreg`).reset();
  idinput++;
  document.getElementById(`id`).value = idinput;
}
}
function vaciar() {
  var contador = 1;
  var tabla = document.getElementById("tabla");
  var filas = tabla.rows.length;
  for (var i = contador; i < filas; i++) {
    tabla.deleteRow(contador);
  }
}

function ordenar() {
  for (x = 0; x < bbdd.length; x++) {
    document.getElementById(`tabla`).innerHTML +=
      `<tr class="fila1">
    <td>` +
      bbdd[x]._id +
      `</td>
    <td>` +
      bbdd[x].alumno +
      `</td>
    <td>` +
      bbdd[x].tiempoEstudio +
      `</td>
    <td>` +
      bbdd[x].cursos +
      `</td>
    <td>` +
      bbdd[x].certificados +
      `</td>
    <td>` +
      bbdd[x].rutaEstudio +
      `</td>
  </tr>`;
  }
}

function ordenarid() {
  vaciar();
  if (!estadoid) {
    bbdd.sort((a, b) => {
      if (a._id < b._id) {
        return -1;
      }
      if (a._id > b._id) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoid = true;
  } else {
    bbdd.sort((a, b) => {
      if (a._id < b._id) {
        return 1;
      }
      if (a._id > b._id) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoid = false;
  }
  ordenar();
}

function ordenarnombre() {
  vaciar();
  if (!estadoalumno) {
    bbdd.sort((a, b) => {
      if (a.alumno < b.alumno) {
        return -1;
      }
      if (a.alumno > b.alumno) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoalumno = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.alumno < b.alumno) {
        return 1;
      }
      if (a.alumno > b.alumno) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadoalumno = false;
  }
  ordenar();
}
function ordenarcursos() {
  vaciar();
  if (!estadocursos) {
    bbdd.sort((a, b) => {
      if (a.cursos < b.cursos) {
        return -1;
      }
      if (a.cursos > b.cursos) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadocursos = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.cursos < b.cursos) {
        return 1;
      }
      if (a.cursos > b.cursos) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadocursos = false;
  }
  ordenar();
}
function ordenarcertificados() {
  vaciar();
  if (!estadocertificados) {
    bbdd.sort((a, b) => {
      if (a.certificados < b.certificados) {
        return -1;
      }
      if (a.certificados > b.certificados) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadocertificados = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.certificados < b.certificados) {
        return 1;
      }
      if (a.certificados > b.certificados) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadocertificados = false;
  }
  ordenar();
}

function ordenartiempoestudio() {
  vaciar();
  if (!estadotiempoestudio) {
    bbdd.sort((a, b) => {
      if (a.tiempoEstudio < b.tiempoEstudio) {
        return -1;
      }
      if (a.tiempoEstudio > b.tiempoEstudio) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadotiempoestudio = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.tiempoEstudio < b.tiempoEstudio) {
        return 1;
      }
      if (a.tiempoEstudio > b.tiempoEstudio) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadotiempoestudio = false;
  }
  ordenar();
}

function ordenarrutaestudio() {
  vaciar();
  if (!estadorutaestudio) {
    bbdd.sort((a, b) => {
      if (a.rutaEstudio < b.rutaEstudio) {
        return -1;
      }
      if (a.rutaEstudio > b.rutaEstudio) {
        return 1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadorutaestudio = true;
  } else {
    bbdd.sort((a, b) => {
      if (a.rutaEstudio < b.rutaEstudio) {
        return 1;
      }
      if (a.rutaEstudio > b.rutaEstudio) {
        return -1;
      }
    });
    console.clear();
    console.log(bbdd);
    estadorutaestudio = false;
  }
  ordenar();
}
