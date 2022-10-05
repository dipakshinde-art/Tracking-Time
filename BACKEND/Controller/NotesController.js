const { Router } = require("express");
const NotesModel = require("../Model/NotesModel");
const notesController = Router();

notesController.post("/create", async (req, res) => {
  const { note } = req.body;
  const userId = req.headers.authorization.split(" ")[1];
 
  const task = new NotesModel({
    note,
    userId,
  });
 
  await task.save();
  res.send(task);
});

notesController.get("/", async (req, res) => {
  const userId = req.headers.authorization.split(" ")[1];
  const task = await NotesModel.find({ userId });
 
  res.send(task);
});

notesController.patch("/:noteId/update", async (req, res) => {
  const { noteId } = req.params;
  const userId = req.headers.authorization.split(" ")[1];
  const task = await NotesModel.findOneAndUpdate(
    { _id: noteId, userId },
    req.body,
    { new: true }
  );

  return res.send({ message: "successfully updated", task });
});

notesController.delete("/:noteId/delete", async (req, res) => {
  const { noteId } = req.params;
  const userId = req.headers.authorization.split(" ")[1];
  await NotesModel.findOneAndDelete({ _id: noteId, userId });
  return res.send({ noteId }); 
});

module.exports = notesController;
