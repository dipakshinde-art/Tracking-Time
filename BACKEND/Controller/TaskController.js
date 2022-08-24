//crud operation 

const { Router } = require("express");
const note = Router();
const { UserModel } = require("../Config/DB.js");
const multer = require('multer')

const validator = (req, res, next) => {
    const data_received = req.body;
    const { Title } = data_received;
    if (!Title) {
        return res.status(400).send("plz fill the data");
    }

    if (!(typeof Title == "string")) {
        return res.status(400).send("validation iS failed");
    }
    next();
};

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

let upload = multer({ storage: storage })

note.post("/create", validator, async (req, res) => {

    const { Title, user_id, Note, img, TitleGroup } = req.body;
    const new_note = new UserModel({
        Title,
        user_id,
        Note,
        TitleGroup
    })
    await new_note.save()
    res.status(201).send({ "message": "note created", new_note })

});
note.patch("/edit/:id", async (req, res) => {
    let Noteid = req.params.id;
    const { user_id } = req.body
    let { Note, Title, } = req.body
   

    // const note = await UserModel.findOne({ _id: Noteid })

    // if (note.user_id === user_id) {
    //     const Documents = await UserModel.updateOne(
    //         { _id: Noteid },
    //         { $set: { Title, Note } }
    //     );

    //     return res.status(201).send({ "message": "successfully updated", Documents })
    // } else {
    //     return res.status(421).send("you are not authorised to do it")
    // }


});

note.delete("/delete/:id", async (req, res) => {
    let Noteid = req.params.id;
    const { user_id } = req.body


    // const note = await UserModel.findOne({ _id: Noteid })
    // if (note.user_id === user_id) {
    //     await UserModel.deleteOne({ _id: Noteid });
    //     return res.status(201).send({ "message": "successfully deleted" })
    // } else {
    //     return res.status(422).send("you are not authorised to do it")
    // }

});


note.get("/list", async (req, res) => {
    const { user_id } = req.body

    console.log(req.query)
    const Label = req.query.label;

    if (req.query.label) {
        const notes = await UserModel.find({ Label })
        res.status(201).send(notes)
    } else {

        const notes = await UserModel.find({})
        res.status(201).send(notes)
    }

});

module.exports = note;
