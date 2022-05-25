const express = require('express')
const tracksRouter = express.Router()

const tracksControllers = require("./tracks_routes.js")
const tracksMiddlewares = require(".tracks_middlewares.js")

tracksRouter.get('/', tracksControllers.getAlbums)
tracksRouter.get('/:id' [tracksMiddlewares.checkExistingtrack, tracksControllers.gettrack])
tracksRouter.post('/', [tracksMiddlewares.checktrackShape, tracksControllers.addtrack])
tracksRouter.put('/:id', [tracksMiddlewares.checktrackShape, tracksControllers.updatetrack])
tracksRouter.delete('/:id', [tracksMiddlewares.checkExistingtrack, tracksControllers.deletetrack])

module.exports = tracksRouter