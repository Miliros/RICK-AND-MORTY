const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPasswordC = /^.{6,10}$/;
const regexPassword = new RegExp('^[0-9]+$');

export function validation({username, password}) {
    
  const errors = {};

  if (username === "") {
    errors.username = "Se requiere un nombre";
  }
  if (!regexEmail.test(username)) {
    errors.username = "Debe ser un correo electrónico";
  }
  if (username.length >= 35) {
    errors.username = "No se permiten mas caracteres";
  }
  if (!regexPassword.test(password)) {
    errors.password = "la contraseña tiene que tener al menos un número";
  }
  if (!regexPasswordC.test(password)) {
    errors.pasword = "la contraseña tiene que tener entre 6 y 10 caracteres";
  }
  return errors;
  
}
