Array.prototype.myFilter = function(func, thistArg){
	var result = [],
		arr = this;

	for (var i = 0; i < arr.length; i++) {
		if(func.call(thistArg, arr[i], i, arr)){
			result.push(arr[i]);
		}
	}
	return result;
}
// var arr = [3,7,11,4,23,42,8,1];

// console.log(arr.myFilter(function(item, i, arr){
// 	return arr[i] < 11;
// }, this));

////////////////////////////////////////////////////

function removeZeros(arr){
	var len = arr.length;

	for (var i = 0; i < len; i++) {
		if(arr[i] == 0){			
			arr.push(arr[i]);
			delete arr[i];
		}
	}
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == undefined){
			arr.splice(i, 1);
			i--;
		}
	}
	return arr;
}

//console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));

//////////////////////////////////////////////////////////////////////

Array.prototype.sameStructureAs = function(arr){
	let firstArr = JSON.stringify(this),
		secondArr = JSON.stringify(arr),
		reg = /(\d,{0,}){0,}/g;
		
	firstArr = firstArr.replace(reg, '-'),
	secondArr = secondArr.replace(reg, '-');

	return firstArr == secondArr;
}

//console.log([ [2, [3,4,5] ] ].sameStructureAs( [1, [2, [3  ] ]]));

///////////////////////////////////////////////////////////////

function maxZeroSequenceLength(arr){
	let mass,
		obj = {},
		sum,
		startIndex,
		endIndex;

	for (let i = 0; i < arr.length; i++) {
		sum = 0;
		for (let j = i; j < arr.length; j++) {
			sum += arr[j];
			if(sum == 0){
				startIndex = i;
				endIndex = j;
				let itemArr = arr.slice(startIndex, endIndex+1);
				obj[itemArr.length] = itemArr;
			}
		}
	}

	let objects = Object.entries(obj),
		result = objects[objects.length-1];
	return result[1];
}

//console.log(maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]));

////////////////////////////////////////////////////////////////////////

function isBalanced(str, brackets){
	let arr = str.split(''),
		checkArr = brackets.split(''),
		structure = [],
		steck = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < checkArr.length; j++) {
			if(arr[i] == checkArr[j]){
				structure.push(arr[i]);
			}
		}
	}

	for (let i = 0; i < structure.length; i++) {
		for (let j = 0; j < brackets.length; j+=2) {
			if(structure[i] == brackets[j]){
				steck.push(structure[i]);	
			}			
		}
		for (let k = 1; k < brackets.length; k+=2) {
			if(structure[i] == brackets[k]){
				if(brackets[brackets.indexOf(steck[steck.length-1]) + 1] == brackets[k]){
					steck.pop();
					break;
				}
				else return false;
			}
		}
	}
	return steck.length == 0;
}

console.log(isBalanced("(Sensei [{says}] (0) yes!)", "()[]{}"));