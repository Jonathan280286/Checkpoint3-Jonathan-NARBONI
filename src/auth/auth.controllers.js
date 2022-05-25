const jwt = require('jsonwebtoken')

class AuthControllers {
    signIn(req, res) {
        const token = jwt.sign({
            userName: req.body.UserName,
            password: req.body.hash
        }, process.env.JWT_SECRET, { expiresIn: 72 * 60 * 1000 })
        res.cookie('jwt-token', token, {httpOnly: true, maxAge: 72 * 60 * 1000})
        res.status(200).send({ token: token })
    }

}

module.exports = new AuthControllers()