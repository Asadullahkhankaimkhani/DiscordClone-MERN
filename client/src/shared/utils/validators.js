export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateEmail(mail);
  const isPasswordValid = passwordValidator(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, username, password }) => {
  const isMailValid = validateEmail(mail);
  const isUsernameValid = usernameValidator(username);
  const isPasswordValid = passwordValidator(password);
  return isMailValid && isUsernameValid && isPasswordValid;
};

export const usernameValidator = (username) => {
  return username.length >= 2 && username.length <= 12;
};

export const passwordValidator = (password) => {
  return password.length >= 5 && password.length <= 12;
};

export const validateEmail = (mail) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(String(mail).toLowerCase());
};
