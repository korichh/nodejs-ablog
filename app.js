require('dotenv').config()
const path = require('path')
const express = require('express')
const routes = require('./routes')
const hbs = require('./middleware/hbs')
const session = require('./middleware/session')
const mysql = require('./middleware/mysql')

const app = express()
const PORT = process.env.PORT

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.use(session)
app.use(mysql)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(routes)
app.use((req, res) => {
    res.status(404).render('error', {
        title: `Error ${404} | ABlog`,
        code: 404,
        message: `It looks like this page doesn't exist`,
        loggedIn: req.session.loggedIn,
        userData: req.session.userData
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})