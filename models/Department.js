const mongoose = require('mongoose');
const deptSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  head_id: {
    type: String
  },
  subjects: {
    type: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("department", deptSchema);