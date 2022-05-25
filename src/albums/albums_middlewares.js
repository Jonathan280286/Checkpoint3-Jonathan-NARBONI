const {getAlbum} = require('albums_models')


class albumsMiddlewares {

    async checkExistingAlbum(req, res, next) {
        const existingAlbum = await getAlbum(req.params.id)
        if (existingAlbum.length === 0) {
          res.status(404).send('Album not found')
         } else {
         next()
        }
    }
}
module.exports = new albumsMiddlewares()