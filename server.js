const Promise = require('bluebird');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'client')));

app.get('/callback', (request, response) => {
	response.send('Callback');
});

app.get('/promise', (request, response) => {
	response.send('Promise');
});


app.listen(PORT, () => {
	console.log(`Listening to port: ${PORT}`);
});

module.exports = app;
