const exphbs = require('express-handlebars')

const hbs = exphbs.create({
    layoutsDir: process.cwd() + '/views/layouts',
    partialsDir: process.cwd() + '/views/partials/',
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        format_date: (createdAt) => {
            let date = new Date(Date.parse(createdAt))
            return date.toLocaleString('en', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
        },
        format_summary: (content) => {
            if (content.length > 300) {
                return content.substring(0, 300) + "..."
            }
            return content
        },
        breaklines: (content) => {
            return String(content).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replaceAll('\n', '<br>')
        },
        log: (data) => {
            console.log(data)
        }
    }
})

module.exports = hbs