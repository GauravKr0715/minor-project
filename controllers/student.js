const student_repo = require('../models/student_repo');
const logger = require('../helpers/logger');
const bcrypt = require('bcryptjs');
const csv = require('csvtojson');
const { registerValidation, loginValidation } = require("../validators/studentValidator");
const { json } = require('express');

const addDetails = async (details) => {
  try {
    console.log(details);
    const user_exisits = await student_repo.fetchOneOrConditions([{ roll_no: details.roll_no }, { email: details.email }]);

    if (user_exisits.length) {
      return {
        success: false,
        message: 'User already exists'
      }
    }
    details.display_password = Math.random().toString(36).slice(-8);
    const salt = await bcrypt.genSalt(15);
    details.password = await bcrypt.hash(details.display_password, salt);

    const data = await student_repo.add(details);

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

const saveAllStudents = async (path) => {
  console.log(path);
  let options = {
    headers: ['roll_no', 'full_name', 'email', 'mobile', 'course', 'yop'],
    trim: true,
    colParser: {
      'roll_no': 'string',
      'full_name': 'string',
      'email': 'string',
      'mobile': 'string',
      'course': 'string',
      'yop': 'string'
    }
  };

  try {
    const jsonObj = await csv(options).fromFile(path);
    let intermediate_array = jsonObj.map(async (student) => {
      console.log(student);
      const { error } = registerValidation(student);
      if (error) return;
      const user_exisits = await student_repo.fetchOneOrConditions([{ roll_no: student.roll_no }, { email: student.email }]);
      console.log(user_exisits);

      if (user_exisits.length) {
        return {
          success: false,
          message: 'User already exists'
        }
      }
      student.display_password = Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(15);
      student.password = await bcrypt.hash(student.display_password, salt);

      const data = await student_repo.add(student);

    });

    console.log(intermediate_array);
    let student_data = await Promise.all(intermediate_array);
    console.log(student_data);
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
  saveAllStudents,
  updateDetails,
  addSubjects
}