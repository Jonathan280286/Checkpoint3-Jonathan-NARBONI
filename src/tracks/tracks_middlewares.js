const {getTrack} = require('albums_models')


class tracksMiddlewares {

    async checkExistingTrack(req, res, next) {
        const existingTrack = await getTrack(req.params.id)
        if (existingTrack.length === 0) {
          res.status(404).send('Track not found')
         } else {
         next()
        }
    }
}
module.exports = new tracksMiddlewares()