// Setup empty JS object to act as endpoint for all routes
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 1300;

projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder

app.use('/website', express.static('website'));
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.info(`🎁 server.js	Line:22	ID:af4e61`);
});
// Setup Server
