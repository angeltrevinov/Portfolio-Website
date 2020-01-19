const mongoose = require('mongoose');

// ===================== PROJECT ===========================
/*
* Schema for project with the details of each one
* */
const projectSchema = mongoose.Schema({
  strName: { type: String, required: true},
  strIdCreator: { type: String, required: true},
  strDesc: { type: String, required: true},
  strUrlGithub: { type: String, required: true},
  strUrlHosting: { type: String },
});

module.exports = mongoose.model('Project', projectSchema);
