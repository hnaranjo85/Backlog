const loginForm = document.querySelector('.form-login');
// const registerForm = document.querySelector('#form-registro');
// Simulacion de los registros
let dataObject1 = {
  'nombre':       'Camila',
  'apellido':     'Perez',
  'telefono':     '3216547',
  'correo':       "camilap@gmail.com",
  'contraseña':   "Camila1478",
  'registro':     1
};

let dataObject2 = {
  'nombre':       'Juan',
  'apellido':     'Perez',
  'telefono':     '3216547',
  'correo':       'juanp@gmail.com',
  'contraseña':   'Juane1478',
  'registro':     2
};

let registros = [];
registros.push(dataObject1);
registros.push(dataObject2);

//if (loginForm !== null){
  loginForm.addEventListener('submit', login);
//}

// if (registerForm !== null){
//   registerForm.addEventListener('submit', agregarRegistro);
// }

function login() {
  let validado = false;
  let email = document.querySelector('#correo').value;
  let password = document.querySelector('#contrasena').value;
  let captcha = document.querySelector('#captcha').value;
  registros.forEach(registro => {
    console.log(registro.correo),
    console.log(registro.contraseña)
    console.log(email);
    if (email === registro.correo) {
      if (password === registro.contraseña) {
        validado = true;        
      }
    }
  });
  if (validado && validarCAPTCHA(captcha)){
    alert('Welcome');
  }else{
    alert('Datos incorrectos');
  }
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