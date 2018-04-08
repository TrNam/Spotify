const express = require('express');
const request = require('request');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const todo = require('./todo.js');

var app = express();

var accounts = [];

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

// app.use(express.json());
// app.use(express.urlencoded());

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
// app.use('/views', express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());


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

app.post('/signup', (request, response) => {
	console.log(request.body)
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

app.get('/congratulations', (request, response) => {
	// console.log(request.body)
	response.render('congratulations.hbs', {
		title: 'Congratulations'
	})
});

app.post('/congratulations', (request, response) => {
	// console.log(request.body)
	response.render('congratulations.hbs', {
		title: 'Congratulations'
	})

	todo.loadFile(accounts);
    todo.addUser(accounts, request.body.emailAddr, request.body.password1);
});

app.listen(port, () => {
	console.log('Server is up on the port 8080');
});