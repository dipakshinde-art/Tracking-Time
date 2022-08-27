
const { Router } = require("express");
const TaskModel = require("../Model/TaskModel");
const taskController = Router();

taskController.post("/create", async (req, res) => {
    const {task_name,task_details,task_completed,sub_task} = req.body;
    const userId = req.headers.authorization.split(" ")[1];
    // console.log(userId)
    const task = new TaskModel({task_name,task_details,task_completed,sub_task,userId});
    // console.log(task);
    await task.save();
    res.send(task)
})

taskController.get("/", async (req, res)=>{
    const userId = req.headers.authorization.split(" ")[1];
    const task = await TaskModel.find({userId});
    console.log(task);
    res.send(task)
})

module.exports=taskController;