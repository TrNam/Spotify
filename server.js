const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 8080;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
})

app.get('/', (request, response) => {
	response.render('login.hbs', {
		title: 'Login page'
	})
});

app.get('/signup', (request, response) => {
	response.render('signup.hbs', {
		title: 'Sign up'
	})
});

app.get('/mainpage', (request, response) => {
	response.render('mainpage.hbs', {
		title: 'Main page'
	})
});

app.get('/mytracks', (request, response) => {
	response.render('mytracks.hbs', {
		title: 'My tracks'
	})
});

app.listen(port, () => {
	console.log('Server is up on the port 8080');
});