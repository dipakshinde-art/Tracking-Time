const { Router } = require("express");
const ProfessionalModel = require("../Model/ProfessionalModel");
const professionalController = Router();

professionalController.post("/create", async (req, res) => {
  const { task_name, task_details, task_completed, sub_task } = req.body;
  const userId = req.headers.authorization.split(" ")[1];
  // console.log(userId)
  const task = new ProfessionalModel({
    task_name,
    task_details,
    task_completed,
    sub_task,
    userId,
  });
  console.log(task);
  await task.save();
  res.send(task);
});

professionalController.get("/", async (req, res) => {
  const userId = req.headers.authorization.split(" ")[1];
  const task = await ProfessionalModel.find({ userId });
  console.log(task);
  res.send(task);
});

professionalController.patch("/:taskId/update",async (req, res)=>{
    const { taskId } = req.params;
    const userId = req.headers.authorization.split(" ")[1];
    const task = await ProfessionalModel.findOneAndUpdate(
      { _id: taskId,userId },
      req.body,
      { new: true }
    );
  
    return res.send({  task });
})

professionalController.delete("/:taskId/delete",async (req, res)=>{
    const { taskId } = req.params; 
    const userId = req.headers.authorization.split(" ")[1];
  await ProfessionalModel.findOneAndDelete({ _id: taskId,userId });
  return res.send({ taskId});
})

module.exports = professionalController;
