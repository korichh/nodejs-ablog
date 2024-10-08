require('dotenv').config()
const mysql = require('mysql')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
})

module.exports = (req, res, next) => {
    req.mysql = pool
    next()
}