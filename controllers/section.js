const section_repo = require('../models/section_repo');
const faculty_repo = require('../models/faculty_repo');
const faculty_controller = require('../controllers/faculty');
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

const updateTimeTable = async (time_table, section) => {

  try {

    // for each changed slot, update that slot for prev teacher (if exists) and then update new value to new teacher
    const data = await section_repo.fetchCertainFieldsByCondition("time_table", { name: section });
    let old_time_table = data.time_table;
    // console.log(data.time_table[0][0]);
    // console.log(time_table);

    let outer_array = time_table.map(async (day) => {
      let inner_array = day.map(async (slot) => {
        if (slot.is_changed) {
          // get old teacher for that slot and update their slot, if exists
          let slot_id = slot.slot_id;
          let day_idx = +slot_id.substring(1, 2) - 1;
          let slot_idx = +slot_id.substring(3, 4) - 1;
          console.log(`day_idx: ${day_idx} and slot_idx: ${slot_idx}`);
          console.log(old_time_table[day_idx][slot_idx].faculty_id);
          // check old time table slot and if teacher exists, update it's slot to be free
          if (old_time_table[day_idx][slot_idx].faculty_id != "UND123") {
            console.log('why are we in here?')
            let old_faculty_id = old_time_table[day_idx][slot_idx].faculty_id;
            let free_slot = {
              slot_id: old_time_table[day_idx][slot_idx].slot_id,
              class_id: "ABC123",
              subject_id: "UND123",
              subject_name: "Unalloted",
              subject_type: 0,
              section: `${section}`
            }
            await faculty_controller.updateSlot(old_faculty_id, free_slot, day_idx, slot_idx);
          }
          // update slot for new teacher
          if (slot.faculty_id != "UND123") {
            let new_faculty_id = slot.faculty_id;
            let updated_slot = {
              slot_id: slot.slot_id,
              class_id: slot.class_id,
              subject_id: slot.subject_id,
              subject_name: slot.subject_name,
              subject_type: slot.subject_type,
              section: `${section}`
            }
            await faculty_controller.updateSlot(new_faculty_id, updated_slot, day_idx, slot_idx);
          }
        }
      });

      let inner_promise_resolve = await Promise.all(inner_array);

    })


    let outer_promise_resolve = await Promise.all(outer_array);
    // set time table for the section - last step
    await section_repo.update({ time_table }, { name: section });

    return {
      success: true,
      message: `Time table updated successfully`
    };

  } catch (error) {
    logger.error(error);
    throw error;
  }


  return
}

module.exports = {
  addBasicDetails,
  updateTimeTable
}