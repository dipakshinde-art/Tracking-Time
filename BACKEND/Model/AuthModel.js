const mongoose = require("mongoose");
const { Schema ,model} = mongoose;

const autheSchema = new Schema({
  email: { type: String, required: true },
  // name: { type: String, required: true },
  password: { type: String, required: true },
});
const user =model("User",autheSchema)
module.exports=user

// const UserAuth = mongoose.model("userLog", autheSchema);

// module.exports = {
//   UserAuth
// };