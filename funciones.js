idinput= 1

function crear(){
    class Alumno {
        constructor(nombre, apellido, id, nacionalidad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.id = id;
            this.nacionalidad = nacionalidad;
        }
    }
    let nombreinput = document.getElementById(`nombre`).value;
    let apellidoinput = document.getElementById(`apellido`).value;
    let idinput = parseInt(document.getElementById(`id`).value);
    let nacionalidadinput = document.getElementById(`nacionalidad`).value;
    alumno = new Alumno(nombreinput,apellidoinput,idinput,nacionalidadinput);
    idinput++;
    document.getElementById(`id`).value = idinput;
    agregar();
  
}

let bbdd = [];
function agregar(){
    bbdd.push(alumno);
    console.log(bbdd);
    document.getElementById(`form`).reset();
    
    }