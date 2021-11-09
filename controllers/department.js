const department_repo = require('../models/department_repo');
const logger = require('../helpers/logger');

const addDetails = async (details) => {
  try {
    const data = await department_repo.add(details);

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

const updateDetails = async (details, condition) => {
  try {
    const data = await department_repo.update(details, condition);

    return {
      success: true,
      message: 'Updated Successfully',
      data
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

const addSubjects = async (details, condition) => {
  try {
    const data = await department_repo.updateSubjects(details, condition);

    return {
      success: true,
      message: 'Updated Successfully',
      data
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = {
  addDetails,
  updateDetails,
  addSubjects
}