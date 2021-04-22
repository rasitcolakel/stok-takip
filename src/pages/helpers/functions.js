const checkUsername = (s) =>
  /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/i.test(s);
const checkEmail = (s) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i.test(s);

const lengthCheck = (s, length) => s.length >= length;

export default {
  checkEmail,
  checkUsername,
  lengthCheck,
};
