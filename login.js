let registros = [];

function login() {

}

function agregarRegistro() {
  // Detener la acción por defecto del formulario
  e.preventDefault();
  // Campo oculto validador del formulario
  const checkForm = document.querySelector('#valida').getAttribute('value');
  if(checkForm == 1) {
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
      // Mostrar arreglo ordenado
      ordenarArreglo(formData);
  }
}

function validarCAPTCHA(valor) {
  if(Number(valor) === 1000) {
      return true;
  }else {
      return false;
  }
}


module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;