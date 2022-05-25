const express = require('express')
const albumsRouter = express.Router()

const albumsControllers = require("./albums_routes.js")
const albumsMiddlewares = require(".albums_middlewares.js")

albumsRouter.get('/', albumsControllers.getAlbums)
albumsRouter.get('/:id' [albumsMiddlewares.checkExistingAlbum, albumsControllers.getAlbum])
albumsRouter.post('/', [albumsMiddlewares.checkAlbumShape, albumsControllers.addAlbum])
albumsRouter.put('/:id', [albumsMiddlewares.checkAlbumShape, albumsControllers.updateAlbum])
albumsRouter.delete('/:id', [albumsMiddlewares.checkExistingAlbum, albumsControllers.deleteAlbum])

module.exports = albumsRouter