const express = require('express');
const request = require('request');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser); 
// app.use(bodyParser.urlencoded({    
//   extended: true
// })); 

// app.use(express.json());
// app.use(express.urlencoded());

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

// app.get('/signup', (request, response) => {
// 	var users = response.end(JSON.stringify(request.body))
// 	fs.appendFile('users.json', users, function(err){
// 		if(err){
// 			console.log('Unable to write to file!')
// 		};
// 	};
// });

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

app.listen(port, () => {
	console.log('Server is up on the port 8080');
});