require('dotenv').config()
const session = require('express-session')
const mysqlStore = require('express-mysql-session')(session);

const IN_PROD = process.env.NODE_ENV === 'production'
const storeOptions = {
    connectionLimit: 10,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    createDatabaseTable: true
}

const sessionOptions = {
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new mysqlStore(storeOptions),
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: IN_PROD
    },
}

module.exports = session(sessionOptions)