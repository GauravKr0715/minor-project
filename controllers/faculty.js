const faculty_repo = require('../models/faculty_repo');
const logger = require('../helpers/logger');
const bcrypt = require('bcryptjs');
const { default_time_table } = require('../global/data');

const addDetails = async (details) => {
  try {
    const user_exisits = await faculty_repo.fetchOneOrConditions([{ uni_id: details.uni_id }, { email: details.email }]);

    if (user_exisits.length) {
      return {
        success: false,
        message: 'User already exists'
      }
    }
    details.display_password = Math.random().toString(36).slice(-8);
    const salt = await bcrypt.genSalt(15);
    details.password = await bcrypt.hash(details.display_password, salt);
    details.time_table = default_time_table;

    const data = await faculty_repo.add(details);

    return {
      success: true,
      message: 'Added Successfully',
      data
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = {
  addDetails
}