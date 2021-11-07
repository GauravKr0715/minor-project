const Section = require('./Section');

module.exports = {
  addBasicDetails: async (details) => {
    try {
      const saved_data = await new Section(details).save();
      return saved_data;
    } catch (error) {
      throw error;
    }
  }
}