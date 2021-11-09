const { facultyRegisterSchema,
  facultyLoginSchema } = require('./schemas/facultySchema');

const facultyRegisterValidation = (body) => {
  return facultyRegisterSchema.validate(body);
}

const facultyLoginValidation = (body) => {
  return facultyLoginSchema.validate(body);
}

module.exports = {
  facultyRegisterValidation,
  facultyLoginValidation
}