let registros = [];

function login() {

}

function agregarRegistro() {

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