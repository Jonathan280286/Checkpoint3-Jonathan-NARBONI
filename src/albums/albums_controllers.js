const AlbumsModels = require('../models/albums_models')

class albumsControllers {
    async listAlbums(req, res) {
        try {
            const Albums = await AlbumsModels.getAlbums()
            res.status(200).send(Albums)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async getAlbum(req, res) {
        try {
            const Album = await AlbumsModels.getAlbum(req.params.id)
            res.status(200).send(Album)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async addAlbum(req, res) {
        try {
            const newAlbum = {
                title: req.body.title,
                genre: req.body.genre,
                picture: req.body.picture,
                artist: req.body.artist,
                id: req.body.id
            }
            const albumId = await AlbumsModels.addTrack(newTrack)
            console.log(albumId)
            newAlbum.id = albumId
            res.status(201).send(newAlbum)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async updateAlbum(req, res) {
        try {
            const album = {
                title: req.body.title,
                genre: req.body.genre,
                picture: req.body.picture,
                artist: req.body.artist,
                id: req.body.id
            }
            const putAlbum = await AlbumsModels.updateAlbum(album)
            res.status(200).send(putAlbum)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

   
    async deleteAlbum(req, res) {
        try {
            const album = await AlbumsModels.deleteAlbums(req.params.id)
            res.status(200).send(albums)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }

    }
}

module.exports = new albumsControllers()