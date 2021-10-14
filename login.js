let registros = [];

function login() {
  let validado = false;
  let email = document.querySelector('#correo').value;
  let password = document.querySelector('#contrasena').value;
  let captcha = document.querySelector('#captcha').value;

  registros.forEach(registro => {
    if (email === registro.correo) {
      if (password === registro.contrasena) {
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
      'contrasena':   password,
      'registro':     counter +=1
  };

  registros.push(dataObject);

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