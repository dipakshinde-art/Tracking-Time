
const { Router } = require("express")
const User = require("../Model/AuthModel")
const authRouter = Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


authRouter.post("/signup", async (req, res) => {
    let { email, password } = req.body;

  //  console.log(req.body)
    await bcrypt.hash(password, 8, function (err, hash) {
        if (err) {
            return res.send("Invalide password");
        }
        const userInfo = new User({
            email,
            password: hash,

        });
        userInfo.save();
    });
    return res.status(201).send("Signup Success");

})
authRouter.post("/login", async (req, res) => {

    let { email, password } = req.body;

    const userInfo = await User.findOne({ email });
    const hash_pass = userInfo.password;

    console.log({ "userInfo": userInfo })
    if (!userInfo) {
        return res.send("Invalide connections");
    }

    await bcrypt.compare(password, hash_pass, function (err, result) {
        if (err) {
            return res.send("try again");
        }
        if (result) {
            const token = jwt.sign(
                { email: userInfo.email, _id: userInfo._id },
                "secret",
                // { expiresIn: "1hr" }
            );
            console.log(token)
            return res.send({ message: "Login Success", token: token });
        } else {
            return res.send("Invalide connections");
        }
    });

})

module.exports = authRouter;

