
function checkApellido (){
    let lastname = document.getElementById("apellido").value;
    let expreg = new RegExp("/^a-zA-ZáéíóúÁÉÍÓÚ /");
    if (lastname == null || lastname.length == 0) {
       alert('Campo obligatorio!');
       return false;
    }
    else if(lastname.length < 4 || lastname.length > 30) {
        alert('Campo incompleto!');
        return false;
    }
    else if(!expreg.test(lastname)) {
        alert('Caracteres no aceptados!');
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

 function checkEmail(){
    let txtEmail = document.getElementById("correo").value;

    if(!(/\S+@\S+\.\S+/.test(txtEmail)) || txtEmail.length === 0 || !txtEmail.trim()){
        alert("El campo de email no cumple con las políticas");
        return false;
    }else{
        return true;
    }
  }

function checkContrasena(){
    var contrasena;
    contrasena = document.getElementById("contrasena").value;
    expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

    if (contrasena == null || contrasena.length == 0){
        alert("Constraseña no debe estar vacia")
        return false;
    }
    else if(!expresion.test(contrasena)){
        alert("Contraseña no valida")
        return false;
    }
    else{
        return true;
    }
}

function validate () {
    checkApellido();
    checkTelefono();
    checkEmail();
    checkContrasena();
}
