const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPasswordC = /^(?=.*[a-zA-Z])(?=.*\d).{6,10}$/;
const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

export function validation({ username, password }) {
  const errors = {};

  if (username === "") {
    errors.username = "a name is required";
  }
  if (!regexEmail.test(username)) {
    errors.username = "It must be an email";
  }
  if (username.length >= 35) {
    errors.username = "No more characters allowed";
  }
  if (!regexPassword.test(password)) {
    errors.password = "password must be alphanumeric";
  }
  if (!regexPasswordC.test(password)) {
    errors.pasword = "the password has to be between 6 and 10 characters";
  }
  return errors;
}
