const jwt = require('jsonwebtoken');
const JWT_SECRET = "AnkitIsaDeveloper"
const fetchuser = (req, res, next) => {
    //Get user from jwt token
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {

        const data = jwt.verify(token, JWT_SECRET)
        // console.log(data.user)
        req.user = data
        // console.log(req.user)
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using valid token" })
    }
}
module.exports = fetchuser;