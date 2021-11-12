let bbdd = [];

function flocal(){
    class Alumno {
        constructor(_id, alumno, tiempoEstudio, cursos, certificados, rutaEstudio) {
            this._id = _id 
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

    const alumno = new Alumno(idinput,alumnoinput,tiempoEstudio,cursos,certificados,rutaEstudio);
    bbdd.push(alumno);
    document.getElementById(`tabla`).innerHTML += `<tr class="fila1">
    <td>`+idinput+`</td>
    <td>`+alumnoinput+`</td>
    <td>`+tiempoEstudio+`</td>
    <td>`+cursos+`</td>
    <td>`+certificados+`</td>
    <td>`+rutaEstudio+`</td>
</tr>`
    console.clear();
    console.log(bbdd);
    document.getElementById(`formreg`).reset(); 
    idinput++;
    document.getElementById(`id`).value = idinput;
    
}


