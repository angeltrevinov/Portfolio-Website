const mongoose = require('mongoose');

// ===================== PROJECT ===========================
/*
* Schema for project with the details of each one
* */
const projectSchema = mongoose.Schema({
  strName: { type: String, required: true},
  strDescription: { type: String, required: true},
  strCollaborators: { type: Array, required: true},
  intLvlImportance: { type: Number, required: true },
  strUrlGithub: { type: String, required: true},
  strUrlHosting: { type: String },
  strUrlPhoto: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
