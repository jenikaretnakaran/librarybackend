var mongoose = require("mongoose");


var userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    emailId: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
}
);

module.exports = mongoose.model("User", userSchema);
