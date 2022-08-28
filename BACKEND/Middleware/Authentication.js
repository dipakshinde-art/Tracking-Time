const jwt = require('jsonwebtoken');


const authentication = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.send("Please login again")
    }
    const user_token = req.headers.authorization
    jwt.verify(user_token, process.env.jwt_secret_key, function (err, decoded) {
        if (err) {
            return res.send("Please login again")
        }
        // console.log(decoded)

        req.body.email = decoded.email
        req.body.user_id = decoded._id
        next()
    });
}

module.exports = authentication