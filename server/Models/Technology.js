const mongoose = require('mongoose');

// =================== TECHNOLOGIES ========================
const technologySchema = mongoose.Schema({
  strName: { type: String, required: true},
  intLevel: { type: Number, required: true, min: 0, max: 4}, // 0 being i don't know anything, and 4 being expert
  strTime: { type: String, required: true}
});

module.exports = mongoose.model('Technology', technologySchema);
