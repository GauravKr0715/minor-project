const section_repo = require('../models/section_repo');
const faculty_repo = require('../models/faculty_repo');
const logger = require('../helpers/logger');

const addBasicDetails = async (details) => {
  try {
    let intermediate_array = details.classes.map(async (c) => {
      const inter_res = await faculty_repo.updateDetailsByPush({
        class_id: c.class_id,
        subject_id: c.subject_id,
        subject_name: c.subject_name,
        subject_type: c.subject_type,
        section: details.name
      }, {
        uni_id: c.faculty_id
      }, 'classes');
    });


    let promise_resolve = await Promise.all(intermediate_array);

    const data = await section_repo.addBasicDetails(details);

    return data;
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = {
  addBasicDetails
}