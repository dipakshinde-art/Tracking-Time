const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


const { connection } = require("./Config/DB.js");
require('dotenv').config()


app.get("/", (req, res) => {
    res.send("Home")
});


//port 1234 
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`Connected to Port`);
    } catch (error) {
        console.log(error);
    }
});