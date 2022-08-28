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

    const { Title, user_id, Note, img, TitleGroup, time, endTime, DATE } = req.body;
    const new_note = new UserModel({
        Title,
        createdate: DATE,
        user_id,
        Note,
        TitleGroup,
        img,
        time,
        endTime,
    })
    await new_note.save()
    res.status(201).send({ "message": "note created", new_note })

});

note.patch("/edit/:id", async (req, res) => {
    let Noteid = req.params.id;
    let { Note, Title, } = req.body


    const note = await UserModel.findOne({ _id: Noteid })


    if (note) {
        const Documents = await UserModel.updateOne(
            { _id: Noteid },
            { $set: { Title, Note } }
        );

        return res.status(201).send({ "message": "successfully updated", Documents })
    } else {
        return res.status(421).send("you are not authorised to do it")
    }


});

note.delete("/delete/:id", async (req, res) => {
    let Noteid = req.params.id;

    // console.log("Noteid",Noteid)
    const note = await UserModel.findOne({ _id: Noteid })

    await UserModel.deleteOne({ _id: Noteid });
    return res.status(201).send({ "message": "successfully deleted" })


});

note.get("/info/:id", async (req, res) => {
    let Noteid = req.params.id;
      console.log(Noteid)
    const note = await UserModel.findOne({ _id: Noteid })
    //  console.log(note)
    if (note) {
        return res.status(201).send({ "message": "Find Information", note })
    } else {
        return res.status(421).send("you are not authorised to do it")
    }

})

note.get("/list", async (req, res) => {

    try {
        const notes = await UserModel.find()
        res.status(201).send(notes)
    } catch (error) {
        res.status(500).send(error)
    }

});

module.exports = note;
