let addBtn = document.getElementById('addBtn');
let userField = document.getElementById('user-field');
let chatField =document.getElementById('chat-field');

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
			createMessageBlock(user, messInfo.text_out);
		}
	}
}


/**
 * the function creates the user object from the received data
 * @param {object} userInfo
*/
getUserInfo = (userInfo) => {
	let randomTime = Math.floor(Math.random() * (31 - 5) + 5) * 1000;
	let user = {
		firstName: userInfo.results[0].name.first,
		lastName: userInfo.results[0].name.last,
		city: userInfo.results[0].location.city,
		phone: userInfo.results[0].phone,
		img: userInfo.results[0].picture.medium,
		username: userInfo.results[0].login.username,
		time: randomTime
	}

	createUserBlock(user);
	createMessage(user);
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