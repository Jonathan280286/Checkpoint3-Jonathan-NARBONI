const UsersModels = require('../../users/models/users.models')
const DbConfig = require('../../dbConfig')
const db = DbConfig.connection

class AuthModels {
    async getUserHash(email) {
        try {
            const mySql = 'SELECT * FROM user WHERE email = ?'
            const result = await db.promise().query(mySql, [email])
            return result[0][0].password
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = new AuthModels()