const AuthModels = require('./auth.models')
const Argon2 = require('argon2')
//const { JSONCookie } = require('cookie-parser')
//const Joi = require('joi')

class AuthMiddlewares {

    async checkPassword(req, res, next) {
        try {
            const hash = await AuthModels.getUserHash(req.body.userName)
            
            if (await Argon2.verify(hash, req.body.password)) {
                req.body.hash = hash
                next()
            }
            else {
                res.status(400).send({ error: 'User Name or password does not match' })
            }
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new AuthMiddlewares()