const TracksModels = require('../models/tracks_models')

class tracksControllers {
    async listTracks(req, res) {
        try {
            const Tracks = await TracksModels.getTracks()
            res.status(200).send(Tracks)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async getTrack(req, res) {
        try {
            const track = await TracksModels.getTrack(req.params.id)
            res.status(200).send(track)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async addTrack(req, res) {
        try {
            const newTrack = {
                title: req.body.title,
                youtube_url: req.body.youtube_url,
                trackId: req.body.trackId
            }
            const trackId = await TracksModels.addTrack(newTrack)
            console.log(trackId)
            newTrack.id = trackId
            res.status(201).send(newTrack)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

    async updateTrack(req, res) {
        try {
            const track = {
                title: req.body.title,
                youtube_url: req.body.youtube_url,
                trackId: req.params.id
            }
            const putTrack = await TrackskModels.updateTrack(track)
            res.status(200).send(putTrack)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }
    }

   
    async deleteTrack(req, res) {
        try {
            const track = await TracksModels.deleteTrack(req.params.id)
            res.status(200).send(track)
        }
        catch(error) {
            res.status(500).send({ error: error.message })
        }

    }
}

module.exports = new tracksControllers()