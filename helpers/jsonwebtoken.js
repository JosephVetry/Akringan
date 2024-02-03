var jwt = require('jsonwebtoken');

const createToken = (accessToken) => {
    return jwt.sign(accessToken, 'joseph')
}

module.exports = { createToken }
