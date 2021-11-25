const mongoose = require('mongoose');
const attendanceSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  class_id: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  present_students: {
    type: [String]
  },
  updatedAt: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('attendance', attendanceSchema);