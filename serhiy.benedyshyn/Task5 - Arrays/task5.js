/*
*	1. Filter.
*   Own implementation of Array.prototype.filter() method.
*
* 	@param 	{function} 	expression
* 	@return {Array} 	acc
*/
Array.prototype.filter = function(expression) {
	if (typeof expression != "function") throw new TypeError("expression is not a function")
	return this.reduce((acc, el) =>  expression(el) ? acc.concat(el) : acc, [])
};

/*
*	2. Remove Zeros
*   Function that takes an array of values and moves all elements that are zero to the end of the array,
*	otherwise preserving the order of the array.
*
* 	@return {Array} 	this
*/
Array.prototype.removeZeros = function() {
	return this.filter(a => a!==0).concat(this.filter(a => a===0));
};

/*	3. Nesting Structure Comparison.
*   Function which returns true when its argument is an array that has the same nesting structure as the first array.
*
* 	@param 	{Array} 	arr
* 	@return {Boolean} 	result
*/
Array.prototype.sameStructureAs = function(arr){
	var len = Math.min(this.length, arr.length), i=0, result = true;	// len = the least of two values
	while ( i < len ){
		if ( Array.isArray(this[i]) !== Array.isArray(arr[i]) || !result) 
			return false;												// if the items are different breaks with false
		else 
			if ( Array.isArray(this[i]) && Array.isArray(arr[i]) )		// if both items are arrays
				result = this[i].sameStructureAs(arr[i])				// recursion
		i++;
	}
	return result;
}

/*	4. Longest sequence with zero sum.
*   Method which takes an array of integers (positive and negative) and returns
*   the longest contiguous sequence in this array, which total sum of elements equal 0.
*
* 	@return {Array} 	outArr
*/
Array.prototype.maxZeroSequenceLength = function(){
	var outArr = new Array(0),
		  temp = new Array(0), 
		   sum = 0

	for (var i=0; i<this.length; i++){
		sum = 0
		temp = new Array()
			for (var j=i; j<this.length; j++){
					sum += this[j];											// counts sum of temp's items
					temp.push(this[j]);										// adds item to current array
					if (sum == 0 && temp.length>=outArr.length)
						outArr = JSON.parse(JSON.stringify(temp))			// copy current array to final array
			}
	}
	return outArr;
}

/*	5. Balancing parentheses.
*	Function defines an opening and closing sequence that needs balancing.
*
* 	@param 	{string} 	str
* 	@param 	{string} 	pairs
* 	@return {Boolean} 	true/false
*/
function isBalanced(str, pairs){
	var   s = str.split('').filter(item => pairs.includes(item)).join(''),	// filters input string by pairs's symbols
	     ok = false,														// if found pair ok = true
	 scopes = [];

	for (var i=0; i<pairs.length; i+=2) 			// creates an array of string (pairs) "()[]{}"
		scopes.push(pairs.slice(i, i+2));			// => ["()","[]","{}"]

	for(var i=0; i<s.length; ){						
		
		ok = false;									// reload ok

			for (var j=0; j<scopes.length; j++)		// seeking in scopes array
				if (~s.indexOf(scopes[j])){			// if s contains some of scopes's item do next:
					s = s.replace(scopes[j], "")	// delete this part of s
						ok = true;					// found flag
						//break;		// do not need this
				}

		i = ok ? 0 : i+=1;							// if some pair found go to start end do all again
	}
	// if cycle ends with s.length > 0 that mean that some symbols has no pairs or has wrong order
	return s.length == 0 ? true : false
}



// 1. console.log([1,2,3,4,5,6,7,8,9,0,6,4].filter(x => x>4))						
// => [5, 6, 7, 8, 9, 6]


// 2. console.log([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14].removeZeros())	
// => [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]


// 3. console.log([ [1, [1, [1]]], [ 1, 1 ], [ 1, [1 , [ 1, [ 1, 1 ] ]]  ] ].sameStructureAs( [ [2, [2, [2]]], [ 2, 2 ], [ 1, [1 , [ 1, [ 1, 1 ] ]]  ] ]))
// => true		


// 4. console.log([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11].maxZeroSequenceLength()) 
// => [92, -115, 17, 2, 2, 2]


// 5. console.log(isBalanced("{([(Sensei) [says] no!])}", "()[]{}"))
// => true
