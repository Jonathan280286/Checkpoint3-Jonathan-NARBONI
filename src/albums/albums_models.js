const mysql = require('mysql2')
const DbConfig = require('../../database.js')

const db = DbConfig.connection

class albumsModels {

    async getAlbums() {
        try {
            const mySql = 'SELECT * FROM album' 
            const result = await db.promise().query(mySql)
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async getAlbum(albumId) {
        try {
            const mySql = 'SELECT * FROM album WHERE id = ?'
            const result = await db.promise().query(mySql, [albumId])
            return result[0]
        }
        catch(error) {
            throw error
        }
    }

    async addAlbum(newAlbum) {
        try {
            const mySql = 'INSERT INTO album (title, genre, picture, artist) VALUES (?,?,?,?)'
            const result = await db.promise().query(mySql, [newAlbum.title, newAlbum.genre, newAlbum.picture, newAlbum.artist, newAlbum.id])
            return result[0]//.insertId
        }
        catch(error) {
            throw error
        }
    }

    async updateAlbum(album) {
        try {
            const mySql = 'UPDATE album SET title = ?, genre = ?, picture = ?, artiste = ?, id = ? WHERE id = ?'
            const result = await db.promise().query(mySql, [album.title, album.genre, album.picture, album.artiste, album.albumId])
            return result[0].id
        }
        catch(error) {
            throw error
        }
    }

    async deleteAlbum(albumId) {
        try {
            const mySql = 'DELETE FROM album WHERE id = ?'
            const result = await db.promise().query(mySql, [albumId])
            return result 
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new albumsModels()