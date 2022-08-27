const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  note: { type: String, default: "", required: true },
  userId:{ type: String, required: true}

});

const NotesModel = mongoose.model("note", noteSchema);

module.exports = NotesModel;
