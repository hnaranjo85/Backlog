function checkNombre(valor){
    let expreg = new RegExp(/^[A-Za-záéíóúñÁÉÍÓÚÑ ]+$/);

    if (valor == null || valor.length == 0) {
        alert('El Nombre no debe estar vacio!');
        return false;
    }
    else if(valor.length < 4 || valor.length > 30) {
        alert('El Nombre debe contener entre 4 y 30 caracteres');
        return false;
    }
    else if(!expreg.test(valor)) {
        alert('El Nombre no acepta caracteres especiales ni numéricos!');
        return false;
    }
    else {
        return true;
    }
}

function checkApellido(valor){
    let pattern = new RegExp(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ ]+$/);

    if (valor == null || valor.length == 0) {
        alert('El Apellido no debe estar vacio!');
        return false;
    }
    else if(valor.length < 4 || valor.length > 30) {
        alert('El Apellido debe tener entre 4 y 30 caracteres!');
        return false;
    }
    else if(!pattern.test(valor)) {
        alert('El Apellido no acepta caracteres especiales ni numéricos!');
        return false;
    }
    else {
        return true;
    }
}

function checkTelefono(valor) {
    let regex = new RegExp('^[0-9]+$');

    if (valor == null || valor.length == 0) {
        alert("El Telefono no debe estar vacio!");
        return false;
    }
    else if (regex.test(valor) == false) {
        alert("El Telefono solo puede contener números!");
        return false;
    }
    else if (valor.length != 7) {
        alert("El Telefono debe contener 7 digitos!");
        return false;
    }
    else {
        return true;
    }
}

function checkCorreo(valor){
    if(valor.length === 0){
        alert("El Email no debe estar vacío");
        return false;
    }else if (!/\S+@\S+\.\S+/.test(valor) || !valor.trim()) {
        alert("Debe ser un correo válido!");
        return false;
    }
    else{
        return true;
    }
}

function checkContrasena(valor){
    let expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

    if (valor == null || valor.length == 0){
        alert("La Constraseña no debe estar vacia")
        return false;
    }
    else if(!expresion.test(valor)){
        alert("La contraseña debe contener por lo menos una letra mayúscula, minúscula, un número y con una longitud mayor o igual a 8 dígitos");
        return false;
    }
    else{
        return true;
    }
}

function validateRegisterForm() {
    checkFunction = [];

    let name = document.getElementById("nombre").value;
    checkFunction.push(checkNombre(name));

    let lastname = document.getElementById("apellido").value;
    checkFunction.push(checkApellido(lastname));

    let phone = document.getElementById("telefono").value;
    checkFunction.push(checkTelefono(phone));

    let email = document.getElementById("correo").value;
    checkFunction.push(checkCorreo(email));

    let password = document.getElementById("contrasena").value;
    checkFunction.push(checkContrasena(password));

    return checkFunction.every(Boolean);
}


module.exports = { checkNombre, checkApellido, checkTelefono, checkCorreo, checkContrasena };