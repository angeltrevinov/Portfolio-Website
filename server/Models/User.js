const mongoose = require('mongoose');

// ==================== USER ===============================
/*
*  Schema for users who can manege the application
* */
const userSchema = mongoose.Schema({
  strEmail: { type: String, required: true },
  strPassword: { type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
