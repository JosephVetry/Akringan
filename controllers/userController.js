const { hash, check } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jsonwebtoken')
const { Customer } = require('../models')


class userController {
    static async register(req, res) {
        try {
            const { name, email, password } = req.body
            const newPassword = hash(password)

            const newUser = await Customer.create({ name, email, password: newPassword })

            res.status(201).json('Registration successful')
        } catch (err) {
            console.log(err)
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body
            if (!email && !password) {
                res.status(404).json('Account does not exist')
            }
            const findEmail = await Customer.findOne({ where: { email } })
            if (!findEmail) {
                res.status(404).json('Email does not exist')
            }
            const checkPassword = check(password, findEmail.password)
            if (!checkPassword) {
                res.status(404).json('Wrong Password')
            }

            const accessToken = createToken({ id: findEmail.id, email: findEmail.email })

            res.status(200).json({message: 'Login Successful', accessToken: accessToken })

        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = userController