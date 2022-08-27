const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const authRouter = require("./Controller/User.AuthController");
app.use(express.json());
app.use(cors());
require("dotenv").config();

const { connection } = require("./Config/DB.js");

const noteRouter = require("./Controller/TaskController");
const taskController = require("./Controller/TaskRouter");
const personalController = require("./Controller/PersonalController");
const professionalController = require("./Controller/ProfessionalController");
const othersController = require("./Controller/OthersController");
const notesController = require("./Controller/NotesController");
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/note", noteRouter);
app.use("/task", taskController);
app.use("/personal",personalController);
app.use("/professional",professionalController);
app.use("/others",othersController)
app.use("/notes",notesController);
//port 1234
app.use("/auth", authRouter);
app.listen(port, async () => {
  try {
    await connection;
    console.log(`Connected to Port`);
  } catch (error) {
    console.log(error);
  }
});
