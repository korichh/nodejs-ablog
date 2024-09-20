const post = {}

post.getAll = (mysql, cb) => {
    mysql.query('SELECT `posts`.id, `posts`.title, `posts`.content, `posts`.createdAt, `posts`.user_id, `users`.username as `author` FROM `posts` INNER JOIN `users` ON `posts`.user_id = `users`.id', cb)
}

post.getByUser = (mysql, data, cb) => {
    mysql.query('SELECT `posts`.id, `posts`.title, `posts`.content, `posts`.createdAt, `posts`.user_id, `users`.username as `author` FROM `posts` INNER JOIN `users` ON `posts`.user_id = `users`.id AND `posts`.user_id = ?', [data.user_id], cb)
}

post.getById = (mysql, data, cb) => {
    mysql.query('SELECT `posts`.id, `posts`.title, `posts`.content, `posts`.createdAt, `posts`.user_id, `users`.username as `author` FROM `posts` INNER JOIN `users` ON `posts`.user_id = `users`.id AND `posts`.id = ?', [data.id], cb)
}

post.insert = (mysql, data, cb) => {
    mysql.query('INSERT INTO `posts` (`title`, `content`, `user_id`) VALUES (?, ?, ?)', [data.title, data.content, data.user_id], cb)
}

post.update = (mysql, data, cb) => {
    mysql.query('UPDATE `posts` SET `title` = ?, `content` = ? WHERE `id` = ?', [data.title, data.content, data.id], cb)
}

post.delete = (mysql, data, cb) => {
    mysql.query('DELETE FROM `posts` WHERE `id` = ?', [data.id], cb)
}

module.exports = post