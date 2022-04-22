export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateEmail(mail);
  const isPasswordValid = passwordValidator(password);
  return isMailValid && isPasswordValid;
};

const passwordValidator = (password) => {
  return password.length >= 5 && password.length <= 12;
};

const validateEmail = (mail) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
};
