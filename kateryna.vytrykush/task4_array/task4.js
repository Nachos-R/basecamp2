"use strict";

//function 1
//function that removes duplicate values from an array
function removeDublicates(arr) {
	var i, nomerForDelete;

	for (i = 0; i < arr.length; i++) {
		while (arr.indexOf(arr[i], i+1) !== -1) { 
			nomerForDelete = arr.indexOf(arr[i], i+1);
			arr.splice(nomerForDelete, 1);
		}
	}
	return arr;
}

//function2 
//function that returns the common values of two arrays
function commonValues(arr1, arr2) {
	var i, length, array = [];

	for (i = 0; i < arr1.length; i++) {
 		if ( arr2.includes(arr1[i]) && !(array.includes(arr1[i])) )
 		array.push(arr1[i]);
	}
 	return array;
}


//function 3
//function that returns the distinct values of two arrays
function distinctValues(arr1, arr2) {
 	var i = 0, array = [];

 	for (i = 0; i < arr1.length; i++) {
 		if ( (!arr2.includes(arr1[i])) && !array.includes(arr1[i]) )
 		array.push(arr1[i]);
 	}
 	for (i = 0; i < arr2.length; i++) {
 		if ( (!arr1.includes(arr2[i]))  && !array.includes(arr2[i]) )
 		array.push(arr2[i]);
 	}
}

//function 4
//function which creates an array with defined size and fills it with random values
function arrayWithRandomVaiues(arrLength) {
	var array, i;

	array = new Array(arrLength);
	for (i = 0; i < arrLength ; i++) {
		array[i] = Math.random();
	}
}

//function 5
//implementation of Array.prototype.includes() method
Array.prototype.myIncludes = function(searchEl, fromIndex) {
	var i;

	if (fromIndex === undefined) i = 0;
	else i = fromIndex;
	for (i; i < this.length; i++) {
		if (searchEl === this[i])
			return true;
	}
	return false;
}





