let registros = [];

//Ordenar registros por apellido
function ordenarArreglo(arreglo){
    arreglo.sort((a, b) => a.apellido.localeCompare(b.apellido));

    console.log(arreglo);
    return arreglo;
}

// Filtrar correos que contengan el dominio 'gmail.com'
function filtrarCorreo(arreglo) {
    let correos_filtrados = [];
    let filtro = "gmail.com";

    for (var dataObject of arreglo){
        let correo = dataObject["correo"]
        if (correo.includes(filtro)) {
            correos_filtrados.push(dataObject)
        }
    }

    console.log(correos_filtrados);
    return correos_filtrados;
}

//Funcion para agregar los datos de registro en un array
function agregarRegistro() {
    let counter = 0;

    let name = document.querySelector('#nombre').value;
    let lastname = document.querySelector('#apellido').value;
    let phone = document.querySelector('#telefono').value;
    let email = document.querySelector('#correo').value;
    let password = document.querySelector('#contrasena').value;

    // Crear un objeto con los valores de los inputs
    let dataObject = {
        'nombre':       name,
        'apellido':     lastname,
        'telefono':     phone,
        'correo':       email,
        'contraseña':   password,
        'registro':     counter +=1
    };

    registros.push(dataObject);
}

//Exportación
module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;