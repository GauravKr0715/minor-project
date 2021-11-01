const student = require('./student');

module.exports = {
  fetchOne: async (condition) => {
    try {
      return await student.findOne(condition);
    } catch (error) {
      throw error;
    }
  }
}