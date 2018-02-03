let addBtn = document.getElementById('addBtn'),
	userField = document.getElementById('user-field'),
	chatField =document.getElementById('chat-field'),
	reset =document.getElementById('reset');


window.onload = getdata();

/**
 * the function receives data from the server and depicts user blocks and messages
 * when reloading the page
*/
function getdata(){
	let xhr = new XMLHttpRequest(),
		users = [];

	xhr.open('GET', 'getusers.php', true);

	xhr.send();

	xhr.onreadystatechange = () => {
		if( xhr.readyState != 4) return;

		if(xhr.status != 200){
			alert(`${xhr.status}: ${xhr.statusText}`);
		}
		else{
			let arr = JSON.parse(xhr.responseText),
				i = 0;

			if(arr == null){
				return;
			}
			else{
				arr.forEach( obj => {
					obj.firstName = obj.name.split(' ')[0];
					obj.lastName = obj.name.split(' ')[1];
					users[i++] = obj;
					createUserBlock(obj);
				});
			}
		}
	}

	let req_mess = new XMLHttpRequest();

	req_mess.open('GET', 'getmessages.php', true);

	req_mess.send();

	req_mess.onreadystatechange = () => {
		if( req_mess.readyState != 4) return;

		if(req_mess.status != 200){
			alert(`${req_mess.status}: ${req_mess.statusText}`);
		}
		else{
			let arrMess = JSON.parse(req_mess.responseText);

			if(arrMess == null) {
				return;
			}
			else{
				arrMess.forEach( obj => {
					for (let i = 0; i < users.length; i++) {
						if(users[i].id == obj.user_id){
							createMessageBlock(users[i], obj.message);
						}
					}
				});
			}
		}
	}

}

addBtn.addEventListener('click', addNewUser);

/**
 * the function makes an AJAX request 
 * and calls the function getUserInfo with the data obtained
*/
function addNewUser(){
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://randomuser.me/api/', true);

	xhr.send();

	xhr.onreadystatechange = () => {
		if( xhr.readyState != 4) return;

		if(xhr.status != 200){
			alert(`${xhr.status}: ${xhr.statusText}`);
		}
		else{
			getUserInfo(JSON.parse(xhr.responseText));
		}
	}

}

/**
 * the function makes an AJAX request 
 * and calls the function createMessageBlock with the data obtained
 * @param {object} user
*/
function addNewMessage(user){
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'http://www.randomtext.me/api/gibberish/p-3/5-15/', true);

	xhr.send();
	
	xhr.onreadystatechange = () => {
		if( xhr.readyState != 4) return;

		if(xhr.status != 200){
			alert(`${xhr.status}: ${xhr.statusText}`);
		}
		else{
			let messInfo = JSON.parse(xhr.responseText);
			messageToDB(user.id, messInfo.text_out);
			createMessageBlock(user, messInfo.text_out);
		}
	}
}

/**
 * the function sends user data to the server
 * @param {object} user
*/
function writeToDataBase(user){
	let data = JSON.stringify(user),
	
	    xhr = new XMLHttpRequest();

	xhr.open('POST', 'writetodb.php', true);

	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

	xhr.onload = () => {
    	let res = JSON.parse(xhr.responseText);
    	console.log("User record added successfully");
    	user.id = res;
    	createUserBlock(user);
    	createMessage(user);
  	}

	xhr.send(data);
}

/**
 * the function sends user id and message to the server
 * @param {number} id
 * @param {string} mess
*/
function messageToDB(id, mess){
	let data = JSON.stringify({id: id, message: mess}),
	
		xhr = new XMLHttpRequest();

	xhr.open('POST', 'writemesstodb.php', true);

	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

	xhr.onload = () => {
    	let res = JSON.parse(xhr.responseText);
    	console.log(res);
  	}

	xhr.send(data);
}

/**
 * the function sends a request in the backend
 * and clears all the data in the DB and UI
*/
reset.addEventListener('click', function(){
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'resetdata.php', true);

	xhr.onload = () => {
    	console.log(JSON.parse(xhr.responseText));
    	
    	while(userField.firstChild){
			userField.removeChild(userField.firstChild);
		}
		while(chatField.firstChild){
			chatField.removeChild(chatField.firstChild);
		}
  	}

	xhr.send();
});

/**
 * the function creates the user object from the received data
 * @param {object} userInfo
*/
getUserInfo = (userInfo) => {
	let randomTime = Math.floor(Math.random() * (31 - 5) + 5) * 1000,
		user = {
			firstName: userInfo.results[0].name.first,
			lastName: userInfo.results[0].name.last,
			city: userInfo.results[0].location.city,
			phone: userInfo.results[0].phone,
			img: userInfo.results[0].picture.medium,
			username: userInfo.results[0].login.username,
			time: randomTime
		}
	user.name = user.firstName + ' ' + user.lastName;

	writeToDataBase(user);
}

/**
 * creates a user block and puts it in a document
 * @param {object} user
*/
createUserBlock = (user) => {
	let userBlock = document.createElement('div');
	userBlock.className = 'user';
	userField.appendChild(userBlock);

	let avaBlock = document.createElement('div');
	avaBlock.className = 'ava-block';

	let img = document.createElement('img');
	img.className = 'avatar';
	img.src = user.img;
	avaBlock.appendChild(img);
	userBlock.appendChild(avaBlock);

	let info = document.createElement('div');
	info.className = 'info';

	let name = document.createElement('p'),
		city = document.createElement('p'),
		phone = document.createElement('p');

	name.className = 'name';
	name.innerHTML = `${user.firstName} ${user.lastName}`;
	city.className = 'city';
	city.innerHTML = `City: ${user.city}`;
	phone.className = 'phone';
	phone.innerHTML = `Phone: ${user.phone}`
	info.appendChild(name);
	info.appendChild(city);
	info.appendChild(phone);

	userBlock.appendChild(info);

	return;
}

/**
 * repeats the function call addNewMessage after a certain period of time
 * @param {object} user
*/
createMessage = (user) => {
		setInterval(addNewMessage, user.time, user);
}

/**
 * creates a message block and puts it in a document
 * @param {object} user
 * @param {string} mess
*/
createMessageBlock = (user, mess) => {
	let messageBlock = document.createElement('div');
	messageBlock.className = 'user';
	chatField.appendChild(messageBlock);

	let avaBlock = document.createElement('div');
	avaBlock.className = 'ava-block';

	let img = document.createElement('img');
	img.className = 'avatar';
	img.src = user.img;
	avaBlock.appendChild(img);
	messageBlock.appendChild(avaBlock);

	let info = document.createElement('div');
	info.className = 'info';

	let name = document.createElement('p'),
		message = document.createElement('p');

	name.className = 'name';
	name.innerHTML = `${user.firstName} ${user.lastName}`;
	message.className = 'message';
	message.innerHTML = mess;

	info.appendChild(name);
	info.appendChild(message);

	messageBlock.appendChild(info);
}