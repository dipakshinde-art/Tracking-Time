const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
require('dotenv').config()

const { connection } = require("./Config/DB.js");
const authentication = require("./Middleware/authentication")
const noteRouter = require("./Controller/TaskController")
const authRouter=require("./Controller/User.AuthController")

app.get("/", (req, res) => {
    res.send("Home Page")
});

app.use("/note",noteRouter);
app.use("/auth",authRouter)


app.listen(port, async () => {
    try {
        await connection;
        console.log(`Connected to Port`);
    } catch (error) {
        console.log(error);
    }
});