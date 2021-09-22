
function checkApellido (){
    let lastname = document.getElementById("apellido").value;
    let pattern = new RegExp("^[a-zA-ZáéíóúñÁÉÍÓÚÑ ]+$");

    if (lastname == null || lastname.length == 0) {
       alert('El campo Apellido es obligatorio!');
       return false;
    }
    else if(lastname.length < 4 || lastname.length > 30) {
        alert('El campo Apellido debe tener entre 4 y 30 caracteres!');
        return false;
    }
    else if(!pattern.test(lastname)) {
        alert('El campo Apellido no acepta caracteres especiales ni numéricos!');
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
        alert("El campo telefono es obligatorio!");
        return false;
    }
    else if (regex.test(telefono) == false) {
        alert("El campo telefono solo puede contener números!");
        return false;
    }
    else if (telefono.length != 7) {
        alert("El campo telefono debe contener 7 digitos!");
        return false;
    }
    else {
        return true;
    }
}

 function checkCorreo(){
    let txtEmail = document.getElementById("correo").value;

    if(!(/\S+@\S+\.\S+/.test(txtEmail)) || txtEmail.length === 0 || !txtEmail.trim()){
        alert("El campo de email no cumple con las políticas");
        return false;
    }else{
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
    checkApellido();
    checkTelefono();
    checkCorreo();
    checkContrasena();
}

module.exports = checkApellido();
module.exports = checkTelefono();
module.exports = checkContrasena();
module.exports = checkContrasena();