let clearBtn = document.getElementById('clear');
let arrOfNodes = [];

clearBtn.addEventListener("click", clearFun);

/**
 *function removes all elements that were previously stored in the array
*/
function clearFun(){
	if(arrOfNodes.length != 0){
		for (let i = 0; i < arrOfNodes.length; i++) {
			document.body.removeChild(arrOfNodes[i]);
		}
		arrOfNodes = [];
	}
	else return;
	
}


document.onmousedown = event => {
	let dragTarget = event.target;
	let shiftX, shiftY;
	let parentChoice = document.getElementById('choice');
	
	if (event.which != 1) { //if right-click, it does not start the transfer
    	return; 
  	}
	
	if(dragTarget.parentNode !== parentChoice){
		dragTarget.classList.add('elemInArea');
	}

	if(!dragTarget.classList.contains('dragElem') || dragTarget.classList.contains('elemInArea')){
		return;
	}

	arrOfNodes.push(dragTarget);
	

	createNewElement(dragTarget);

	beginDrag(event.clientX, event.clientY);

	document.onmousemove = event => {
		moveAt(event.clientX, event.clientY);
	};

	dragTarget.onmouseup = () => {
		endDrag();
	};

/**
 * function creates a new element that is placed in place of the previous one
 * param {object} elem
*/ 
	function createNewElement(elem){
		let newElem = elem.cloneNode(true);

		document.getElementById('choice').appendChild(newElem);

		return;
	}

/**
 *the function sets the initial shift of the cursor relative to the element and
 *changes the item's position
*/ 
	function beginDrag  (clientX, clientY)  {
		let box = dragTarget.getBoundingClientRect();

		shiftX = clientX - box.left;
		shiftY = clientY - box.top;

		dragTarget.style.position = 'fixed';

		document.body.appendChild(dragTarget);

		moveAt(clientX, clientY);
	}

/**
 * the function changes the coordinates of an element
*/
	function moveAt  (clientX, clientY)  {
		let newX = clientX - shiftX;
		let newY = clientY - shiftY;

		dragTarget.style.left = newX + 'px';
		dragTarget.style.top = newY + 'px';
	}

/**
 * function changes the item's position and completes all events
*/
	function endDrag  ()  {
		//dragTarget.style.top = parseInt(dragTarget.style.top) + pageYOffset + 'px';
		dragTarget.style.position = 'absolute';

		document.onmousemove = null;
		dragTarget.onmouseup = null;
	}

	return false;
}