// l.;,mkmjnhuyjhyujyuyujgjukilo;p[';;/
const jwt = require("jsonwebtoken")
const User = require("../models/usersModel")

const protect = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, "tokens.token": token })
        if (!user) {
            throw new Error('Unauthorized')
        }

        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({ error: "please authenticate" })
    }

}


module.exports = {
    protect
}

