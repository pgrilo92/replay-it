const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express()

require('dotenv').config()
require('./config/database')

app.use(logger('dev'))
app.use(express.json())

//Load favicon and static items
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

//Set routes for inner API calls
app.user('/api/users', require('./routes/api/users'))


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function(){
    console.log(`Express is running on port ${port}`)
})
