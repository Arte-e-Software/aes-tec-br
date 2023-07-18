const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const app = express()
const port = 3030

app.use('/assets', express.static(__dirname + '/assets'));
app.use(favicon(path.join(__dirname, '/assets', 'favicon.ico')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})