const mongoose = require("mongoose");

const personalSchema = mongoose.Schema({
  task_name: { type: String, default: "", required: true },
  task_details: { type: String, default: "" },
  task_completed: { type: Boolean, default: false },
  sub_task: { type: [Object], default: [] },
  userId:{type:String, required:true}
});

const PersonalModel = mongoose.model("personaltask", personalSchema);

module.exports = PersonalModel;
