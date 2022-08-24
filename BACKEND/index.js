const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
require('dotenv').config()

const { connection } = require("./Config/DB.js");

const noteRouter = require("./Controller/TaskController")
app.get("/", (req, res) => {
    res.send("Home Page")
});

app.use("/note", noteRouter);
//port 1234 
app.listen(port, async () => {
    try {
        await connection;
        console.log(`Connected to Port`);
    } catch (error) {
        console.log(error);
    }
});