// Setup empty JS object to act as endpoint for all routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 1300;

let projectData = null;

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder

app.use('/', express.static('website'));


app.post('/wether', (req, res) => {
	projectData = req.body;
	res.json(projectData)
	res.sendStatus(200);
});

app.get('/all', (req, res) => {
	res.json(projectData);
	res.sendStatus(200);
});

app.listen(PORT, () => {});
