const { studentLoginSchema,
  studentRegisterSchema } = require('./schemas/studentSchema');

const studentRegisterValidation = (body) => {
  return studentRegisterSchema.validate(body);
}

const studentLoginValidation = (body) => {
  return studentLoginSchema.validate(body);
}

module.exports = {
  studentRegisterValidation,
  studentLoginValidation
}