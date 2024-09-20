const user = {}

user.getById = (mysql, data, cb) => {
    mysql.query('SELECT * FROM `users` WHERE `id` = ?', [data.id], cb)
}

user.getByEmail = (mysql, data, cb) => {
    mysql.query('SELECT * FROM `users` WHERE `email` = ?', [data.email], cb)
}

user.insert = (mysql, data, cb) => {
    mysql.query('INSERT INTO `users` (`username`, `email`, `password`, `is_admin`) VALUES (?, ?, ?, ?);SELECT * FROM `users` WHERE `email` = ?', [data.username, data.email, data.password, data.is_admin, data.email], cb)
}

module.exports = user