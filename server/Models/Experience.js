const mongoose = require('mongoose');

// ===================== EXPERIENCE ========================
/*
* Schema for work experiences with the details of each one
* */
const experienceSchema = mongoose.Schema({
  strCompanyName: { type: String, required: true },
  strPosition: { type: String, required: true },
  strDesc: { type: String, required: true },
  boolWorkingNow: { type: Boolean, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  strUrlCompanySite: { type: String }
});

module.exports = mongoose.model('Experience', experienceSchema);
