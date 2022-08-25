const mongoose = require('mongoose');
require('dotenv').config()
const connection = mongoose.connect(process.env.CONNECTION);
const { UserModel } = require("../Model/NoteModel")


module.exports = { connection,UserModel };


// CONNECTION=mongodb+srv://dipak_dev:dipak1996@cluster0.yld4l4k.mongodb.net/unit6?retryWrites=true&w=majority