// Give function used to create tokens
// Give middleware applicable anywhere in app that makes sure token is used
const 
    jwt = require('jsonwebtoken'),
    {JWT_SECRET} = process.env 

// User.findOne({email: req.body.email}, (err, thatUser) => {
//    signToken(thatUser)
// })

function signToken(user) {
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, JWT_SECRET)
}