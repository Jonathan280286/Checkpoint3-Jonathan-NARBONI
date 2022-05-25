const mysql = require('mysql2')
const DbConfig = require('../../database.js')

const db = DbConfig.connection

class trackModels {

    async getTrack() {
        try {
            const mySql = 'SELECT * FROM track' 
            const result = await db.promise().query(mySql)
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async getTrack(trackId) {
        try {
            const mySql = 'SELECT * FROM track WHERE id = ?'
            const result = await db.promise().query(mySql, [trackId])
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async addTrack(newTrack) {
        try {
            const mySql = 'INSERT INTO track (title, youtube_url) VALUES (?,?)'
            const result = await db.promise().query(mySql, [newTrack.title, newTrack.youtube_url, newTrack.id])
            return result[0]//.insertId
        }
        catch(error) {
            throw error
        }
    }

    async updateTrack(track) {
        try {
            const mySql = 'UPDATE track SET title = ?, youtube_url = ?, id = ? WHERE id = ?'
            const result = await db.promise().query(mySql, [track.title, track.youtube_url, track.albumId])
            return result[0].id
        }
        catch(error) {
            throw error
        }
    }

    async deleteTrack(trackId) {
        try {
            const mySql = 'DELETE FROM track WHERE id = ?'
            const result = await db.promise().query(mySql, [trackId])
            return result 
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new trackModels()