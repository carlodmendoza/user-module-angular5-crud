var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String, default: "" },
  last_name: { type: String, required: true },
  gender: { type: String, required: true, enum: ['Female', 'Male', 'Others'] },
  email: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);