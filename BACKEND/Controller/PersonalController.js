const { Router } = require("express");
const PersonalModel = require("../Model/PersonalModel");
const personalController = Router();

personalController.post("/create", async (req, res) => {
  const { task_name, task_details, task_completed, sub_task } = req.body;
  const userId = req.headers.authorization.split(" ")[1];
  // console.log(userId)
  const task = new PersonalModel({
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

personalController.get("/", async (req, res) => {
  const userId = req.headers.authorization.split(" ")[1];
  const task = await PersonalModel.find({ userId });
  console.log(task);
  res.send(task);
});

personalController.patch("/:taskId/update",async (req, res)=>{
    const { taskId } = req.params;
    const userId = req.headers.authorization.split(" ")[1];
    const task = await PersonalModel.findOneAndUpdate(
      { _id: taskId,userId },
      req.body,
      { new: true }
    );
  
    return res.send({task });
})

personalController.delete("/:taskId/delete",async (req, res)=>{
    const { taskId } = req.params; 
    const userId = req.headers.authorization.split(" ")[1];
  await PersonalModel.findOneAndDelete({ _id: taskId,userId });
  return res.send({ taskId });
})

module.exports = personalController;
