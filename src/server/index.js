var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
	res.sendFile(path.resolve('dist/index.html'));
	// res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests

app.post('/test', function (req, res) {
	const data = req.body.data;
	const meaningCloudApi = 'https://api.meaningcloud.com/sentiment-2.1';
	const options = {
		key: process.env.API_KEY,
		lang: 'en',
		model: 'general',
		txt: data,
	};
	const result = {
		url: meaningCloudApi,
		options,
	};
	res.status(200).send(result);
});

app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});
