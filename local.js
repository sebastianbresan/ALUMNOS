let bbdd = [];
let estadoid = false;
let estadoalumno = false;
let estadocursos = false;
let estadocertificados = false;
let estadotiempoestudio = false;
let estadorutaestudio = false;

function flocal() {
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
  let idinput = parseInt(document.getElementById(`id`).value);
  let alumnoinput = document.getElementById(`alumno`).value;
  let tiempoEstudio = parseInt(document.getElementById(`tiempoEstudio`).value);
  let cursos = parseInt(document.getElementById(`cursos`).value);
  let certificados = parseInt(document.getElementById(`certificados`).value);
  let rutaEstudio = parseInt(document.getElementById(`rutaEstudio`).value);

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

function ordenarid() {
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
}
function ordenarnombre() {
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
}
function ordenarcursos() {
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
}
function ordenarcertificados() {
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
}
function ordenartiempoestudio() {
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
}
function ordenarrutaestudio() {
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
}
