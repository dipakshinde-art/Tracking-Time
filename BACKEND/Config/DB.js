const mongoose = require('mongoose');
require('dotenv').config()
const connection = mongoose.connect(process.env.CONNECTION);
const { UserModel } = require("../Model/NoteModel")


module.exports = { connection,UserModel };


// 
