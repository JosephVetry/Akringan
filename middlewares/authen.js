var jwt = require('jsonwebtoken');
const { Customer } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const accessToken = req.headers.accesstoken
        if (!accessToken) {
            res.status(404).json('Login First!')
        }
        const verifyAccessToken = jwt.verify(accessToken, 'joseph')
        const userValid = await Customer.findOne({ where: { email: verifyAccessToken.email } })
        if(!userValid) {
            res.status(404).json('User Not Found')
        }
        req.user = userValid
        next()
    } catch (err) {
        console.log(err);
    }
}

module.exports = { authentication }