function checkNombre (){
    let name = document.getElementById("nombre").value;
    let expreg = new RegExp(/^[A-Za-záéíóúñÁÉÍÓÚÑ ]+$/);

    if (name == null || name.length == 0) {
       alert('El Nombre no debe estar vacio!');
       return false;
    }
    else if(name.length < 4 || name.length > 30) {
        alert('El Nombre debe contener entre 4 y 30 caracteres');
        return false;
    }
    else if(!expreg.test(name)) {
        alert('El Nombre no acepta caracteres especiales ni numéricos!');
        return false;
    }
    else {
        return true;
    }
} 

function checkApellido (){
    let lastname = document.getElementById("apellido").value;
    let pattern = new RegExp(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ ]+$/);

    if (lastname == null || lastname.length == 0) {
       alert('El Apellido no debe estar vacio!');
       return false;
    }
    else if(lastname.length < 4 || lastname.length > 30) {
        alert('El Apellido debe tener entre 4 y 30 caracteres!');
        return false;
    }
    else if(!pattern.test(lastname)) {
        alert('El Apellido no acepta caracteres especiales ni numéricos!');
        return false;
    }
    else {
        return true;
    }
}

function checkTelefono() {
    let telefono = document.getElementById("telefono").value;
    let regex = new RegExp('^[0-9]+$');

    if (telefono == null || telefono.length == 0) {
        alert("El Telefono no debe estar vacio!");
        return false;
    }
    else if (regex.test(telefono) == false) {
        alert("El Telefono solo puede contener números!");
        return false;
    }
    else if (telefono.length != 7) {
        alert("El Telefono debe contener 7 digitos!");
        return false;
    }
    else {
        return true;
    }
}

 function checkCorreo(){
    let txtEmail = document.getElementById("correo").value;

    if(txtEmail.length === 0){
        alert("El Email no debe estar vacío");
        return false;
    }else if (!/\S+@\S+\.\S+/.test(txtEmail) || !txtEmail.trim()) {
        alert("Debe ser un correo válido!");
        return false;
    }
    else{
        return true;
    }
  }

function checkContrasena(){
    let contrasena = document.getElementById("contrasena").value;
    let expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

    if (contrasena == null || contrasena.length == 0){
        alert("La Constraseña no debe estar vacia")
        return false;
    }
    else if(!expresion.test(contrasena)){
        alert("La contraseña debe contener por lo menos una letra mayúscula, minúscula, un número y con una longitud mayor o igual a 8 dígitos");
        return false;
    }
    else{
        return true;
    }
}


function validateRegisterForm() {
    checkNombre();
    checkApellido();
    checkTelefono();
    checkCorreo();
    checkContrasena();
}


module.exports = checkNombre();
module.exports = checkApellido();
module.exports = checkTelefono();
module.exports = checkCorreo();
module.exports = checkContrasena();