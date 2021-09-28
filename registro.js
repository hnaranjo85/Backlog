// Seleccionar del formulario de registro
const registerForm = document.querySelector('#form-registro');
// Crear el array que contendrá los datos y el contador de submit
const formData = [];
let counter = 0;

// Asociar el evento submit del formulario con la función
registerForm.addEventListener('submit', agregarRegistro);

//Funcion para agregar los datos de registro en un array
function agregarRegistro(e) {
    // Detener la acción por defecto del formulario
    e.preventDefault();
    // Obtner los datos de los inputs
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

    // Agregar al array los datos del objecto
    formData.push(dataObject);
    // Resetear el formulario
    registerForm.reset();
    // Mostrar datos en consola
    console.log(formData);
}

// Filtrar correos que contengan el dominio 'gmail.com'
function filtrarCorreo(arreglo) {

    let correos_filtrados = [];
    let filtro = "gmail.com"

    for (var dataObject of arreglo){
        let correo = dataObject["correo"]
        if (correo.includes(filtro)) {
            correos_filtrados.push(dataObject)
        }
    }

    console.log(correos_filtrados);
    return correos_filtrados;
}


module.exports = { agregarRegistro };