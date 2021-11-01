const { loginSchema,
  registerSchema } = require('./schemas/studentSchema');

const registerValidation = (body) => {
  return registerSchema.validate(body);
}

const loginValidation = (body) => {
  return loginSchema.validate(body);
}

module.exports = {
  registerValidation,
  loginValidation
}