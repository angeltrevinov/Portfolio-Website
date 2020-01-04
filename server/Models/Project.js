const mongoose = require('mongoose');

// ===================== PROJECT ===========================
/*
* Schema for project with the details of each one
* */
const projectSchema = mongoose.Schema({
  strName: { type: String, required: true},
  strIdCreator: { type: String, required: true},
  strEngDescription: { type: String, required: true},
  strUrlGithub: { type: String, required: true},
  strSpaDescription: { type: String },
  strCollaborators: { type: Array, },
  intLvlImportance: { type: Number },
  strUrlHosting: { type: String },
  strUrlPhoto: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
