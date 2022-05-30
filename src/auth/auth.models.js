const DbConfig = require('../../database.js')
const db = DbConfig.connection

class AuthModels {
    async getUserHash(userName) {
        try {
            const mySql = 'SELECT * FROM user WHERE userName = ?'
            const result = await db.promise().query(mySql, [userName])
            return result[0][0].password
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new AuthModels()