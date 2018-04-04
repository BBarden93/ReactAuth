// Give function used to create tokens
// Give middleware applicable anywhere in app that makes sure token is used
const 
    jwt = require('jsonwebtoken'),
    {JWT_SECRET} = process.env,
    User = require('./models/User.js')

// User.findOne({email: req.body.email}, (err, thatUser) => {
//    signToken(thatUser)
// })

function signToken(user) {
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, JWT_SECRET)
}
function verifyToken(req, res, next) {
    // check to see if token was provided
    const token = req.get('token')
    //if no token present, deny access
    if(!token)  return res.json({success: false, message: "no token provided."})
    // otherwise try to verify token 
    jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        // if problem with token verification, deny access:
        if(err) return releaseEvents.json({success: false, message: "Invalid token"})
        User.findById(decodedData._id)
    })
}

module.exports = {
    signToken
}