const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  fullName: {
    type: String
  },

  role: {
    type: [String],
    required: true,
    define: 'user'
  },

  phoneNumber: {
    type: String
  }
},
  {
    timestamps: true
  });

const User = mongoose.model("User", userSchema);
module.exports = mongoose.model.User || mongoose.model("User", userSchema);