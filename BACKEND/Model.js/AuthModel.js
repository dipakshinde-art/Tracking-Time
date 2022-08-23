const mongoose = require("mongoose");
const { Schema } = mongoose;

const autheSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

// const UserAuth = mongoose.model("userLog", autheSchema);

// module.exports = {
//   UserAuth
// };