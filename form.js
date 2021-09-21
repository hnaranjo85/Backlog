
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
function validate () {
    checkApellido();
}
