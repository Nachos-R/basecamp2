"use strict";

/*function 1
	implementation of Array.prototype.filter() method
*/
 Array.prototype.myFilter = function(func) {

        if (!(typeof func === 'Function' || typeof func === 'function') ) {
            throw new TypeError(); 
        }

        var len = this.length ; 
        var res = new Array(len); 
        var t = this;
        var c = 0;
        var i = -1;

        while (++i !== len) {
            if ((i in this) && func(t[i], i, t)) {
                res[c++] = t[i];
            } 
        }
        res.length = c;
        return res;
    }

/* function 2
  function that takes an array of values and moves all elements that are zero to the end of the array,
*/
function movesZeroToTheEnd(arr) {
    var index = 0, length;

   length = arr.length;
   while( (index !== -1) && (index < length) ) {
        index = arr.indexOf(0,index);
        arr.push(arr[index]);
        arr.splice(index, 1);
        length--;
    }
    return arr;
}

/*function 3
	function which returns true when its argument is an array that has the same nesting structure as the first array.
*/
 Array.prototype.sameStructureAs = function(array) {

 	var iterator1, iterator2, i;
 	iterator1 = this.entries();
 	iterator2 = array.entries();

 	if(array.length !== this.length) return false;

 	for ( i = 0; i < array.length; i++) {
 		if (iterator1.next().value[1].length !== iterator2.next().value[1].length)
 		return false;
 	}
 	return true;
}

/*function 4
  method which takes an array of integers (positive and negative) and returns
  the longest contiguous sequence in this array, which total sum of elements equal 0.
*/
function maxZeroSequenceLength(array) {
	var zeroArray = [], 
		longestZeroArray = [],
		length = 0,
		maxlength = 0, i, j, sum ;

		for ( i = 0; i < array.length-1; i++) {
			zeroArray = [];
			sum = length = 0;
			j = i; 
			do{
				sum += array[j];
				zeroArray.push(array[j]);
				j++;
			}
			while( (j < array.length) && (sum !== 0) );

			if(sum == 0){
				if(zeroArray.length > maxlength) {
				maxlength = zeroArray.length;
				longestZeroArray = zeroArray.slice();
			}
		}
	}
	return longestZeroArray;
}

/*function 5
	checks whether the string is balanced.
	given a string to validate, and a second string, where each pair of characters
    defines an opening and closing sequence that needs balancing.
*/
function isBalanced(string, brackets) {
	var stack = [], i, index, pairBrackets ;

	for(i = 0; i < string.length; i++) {
		index = brackets.indexOf(string[i]);

		if (index == -1) continue;
		if(!(index % 2)) stack.push(string[i]);
		else{
			if(stack.length == 0) return false;
			pairBrackets = stack.pop() + string[i];
			if(!brackets.includes(pairBrackets)) return false;
		}
	}
	if (stack.length) return false;

	return true;
}




