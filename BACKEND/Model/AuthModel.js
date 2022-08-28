const mongoose = require("mongoose");
const { Schema } = mongoose;

const autheSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const user = mongoose.model("User", autheSchema)
module.exports = user

