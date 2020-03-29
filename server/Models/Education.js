const mongoose = require('mongoose');

// ==================== EDUCATION ==========================
const educationSchema = mongoose.Schema({
  strSchoolName: { type: String, required: true },
  strTitle: { type: String, required: true }, // this could be the carrer, or the course you are doing
  boolStudyingNow: { type: Boolean, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  strUrlEducationSite: { type: String }
});

module.exports = mongoose.model('Education', educationSchema);
