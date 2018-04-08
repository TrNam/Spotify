const fs = require('fs');


var loadFile = (usersArr) => {
	try {
		usersArr = JSON.parse(fs.readFileSync('accounts.json'));
	}
	catch (exception) {
		if(exception.code === 'ENOENT') {
			fs.writeFileSync('accounts.json', '[]');
			usersArr =  JSON.parse(fs.readFileSync('accounts.json'));
		}else {
			window.alert(exception)
		}
	}
};


// var passCheck = (usersArr) => {
// 	loadFile(usersArr);
// 	if (userArr)
// }

var duplicateUsers = (usersArr, username) => {
	loadFile(usersArr);
	for (var i = 0; i < usersArr.length; i++) {
		if(username == usersArr[i].user) {
			alert('Username already existed')
			return false
		}else {
			return true
		}
	}
}

var loginCheck = (usersArr, username, password) => {
	loadFile(usersArr);
	for (var i = 0; i < usersArr.length; i++) {
		if(username != usersArr[i].user || password != usersArr[i].pass) {
			alert('Incorrect Username or Password')
			return false
		}else {
			return true
		}
	}
}

var passCheck = (pass1, pass2) => {
	if(pass1 != pass2) {
		alert('Passwords did not match');
		return false
	}else {
		return true
	}
}

var writeFile = (usersArr) => {
	fs.writeFileSync('accounts.json', JSON.stringify(usersArr));
};


var addUser = (usersArr, username, password) => {
	loadFile(usersArr);
	var account = {
		user: username,
		pass: password
	};

	usersArr.push(account);
	writeFile(usersArr);
};

module.exports = {
	loadFile, writeFile, addUser
};