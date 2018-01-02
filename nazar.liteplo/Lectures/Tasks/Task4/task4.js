/*1. Remove duplicates.
   Write a function that removes duplicate values from an array.
   Example:
   removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]);     //  [1, 3, 7, 9, 8]
 */

function removeDuplicates(arr){
  newArr = [];
  for(let el of arr){
  	if( !newArr.includes(el)){
  		newArr.push(el);
  	}
  }
  	return newArr;
}

/*
2. Common values.
    Write a function that returns the common values of two arrays.
    Example:
    commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [3, 1]
*/

function commonValues(arr1, arr2){
	if(arr1.length < arr2.length){
		[arr1, arr2] = [arr2, arr1];
	}
	return arr1.filter(function(elem){
		return arr2.indexOf(elem) != -1;	
	});	
}

/*
3. Distinct values.
    Write a function that returns the distinct values of two arrays.
    Example:
    distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [4, 6, 5, 10, 7, 9, 8]
*/

function distinctValues(arr1, arr2){
	let newArr = [];
	for(let el of arr1){
		if(!arr2.includes(el) && !newArr.includes(el)){
			newArr.push(el);
		}
	}
	for(let el of arr2){
		if(!arr1.includes(el) && !newArr.includes(el)){
			newArr.push(el);
		}
	}
}

/*
4. Random.
    Write a function which creates an array with defined size and fills it with random values
    function generateArr(arrSize) {...};
*/

function generateArr(arrSize, max=100000, min=0){
	let arr = new Array(arrSize);
	for(let i = 0; i < arr.length; i++){
		arr[i] = Math.floor(Math.random() * (max - min +1)) + min; 
	}	
	return arr; 
}

/*
5. Includes.
    Write your own implementation of Array.prototype.includes() method.
*/

Array.prototype.myincludes = function(elem, index=0){
	let tmpArray;
	if( index >= this.length){
		return false;
	}

	if(index < 0){
		index = this.length - Math.abs(index);
	}

	if(typeof elem === 'number' && elem.toString() === 'NaN'){
		tmpArray =	this.filter(function(el){
			return typeof el === 'number';
		})
		.map(function(el){
			return el.toString();
		});
		return tmpArray.indexOf('NaN') != -1;    		
	}

	return this.indexOf(elem, index) != -1;
}
