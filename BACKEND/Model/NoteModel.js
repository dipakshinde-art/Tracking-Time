const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
    Title: { type: String, required: true },
    TitleGroup: { type: String, default: "" },
    Note: { type: String, default: "" },
    createdate: { type: String, default: "" },
    user_id: { type: String, default: "" },
    date: { type: String, default: "" },
    time: { type: String, default: "" },
    img: {
        default: "", data: Buffer,
        contentType: String
    }

});

const UserModel = mongoose.model("usernote", noteSchema);
module.exports = {
    UserModel
};