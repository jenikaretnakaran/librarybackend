var mongoose = require("mongoose");
// const crypto = require("crypto");
// const uuidv1 = require("uuid/v1");

var bookSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    bookName: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    }
}
);
module.exports = mongoose.model("Books", bookSchema);
