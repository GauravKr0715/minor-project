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
};

const updateSlot = async (faculty_id, new_slot, day_idx, slot_idx) => {
  try {
    console.log('updating for faculty:' + faculty_id);
    let faculty_detail = await faculty_repo.fetchOne({ uni_id: faculty_id });
    console.log(faculty_detail)
    faculty_detail.time_table[day_idx][slot_idx] = new_slot;
    await faculty_detail.save();
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

const validateUser = async (details) => {
  try {
    const user_exists_res = await faculty_repo.fetchOne({
      uni_id: details.uni_id
    });
    console.log(user_exists_res);
    if (user_exists_res && user_exists_res.length) {
      // correct user id
    } else {
      return {
        success: false,
        message: 'Invalid User ID. Try again'
      };
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = {
  addDetails,
  updateSlot
}