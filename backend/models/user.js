const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique:true},
  password: { type: String, required: true },

  // stop server -- run npm install --save mongoose-unique-validator

});

//  add plugin to validate
 userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
