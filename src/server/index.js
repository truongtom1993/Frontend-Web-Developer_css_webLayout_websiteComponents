var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const dotenv = require('dotenv');
dotenv.config();
console.info(`🎁 src/server/index.js	Line:9	ID:6a2e0c`,process.env.API_KEY);

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(8080, function () {
	console.log('Example app listening on port 8080!')
})