const express = require('express')
const AuthControllers = require('./auth.controllers')
const AuthMiddlewares = require('./auth.middlewares')

const authRouter = express.Router()

authRouter.post('/', [ AuthMiddlewares.checkPassword, AuthControllers.signIn])

module.exports = authRouter