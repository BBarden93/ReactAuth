// Give function used to create tokens
// Give middleware applicable anywhere in app that makes sure token is used
const 
    jwt = require('jsonwebtoken'),
    {JWT_SECRET} = process.env 