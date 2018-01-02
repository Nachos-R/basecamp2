/*
    1. Filter.
        Write your own implementation of Array.prototype.filter() method

* @param {function} f
* @return {Array} array
*/

Array.prototype.filter = function(f){
  var array = [], i;
  for(i = 0; i < this.length; i++){
    if( f(this[i], i, this) ){
      array.push(this[i]);
    }
  }
  return array;
};


/*
    2. Remove Zeros.
        Write a function that takes an array of values and moves all elements that are zero to the end of the array,
        otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
        Example:

        [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
        is transformed into
        [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

* @param {Array} arr
* @return {Array}
*/

function moveZero(arr){
  return arr.filter(v => v !== 0 ).concat(arr.filter(v => v === 0 ));
}


/*
    3. Nesting Structure Comparison.
        Write a function which returns true when its argument is an array that has the same nesting structure as the first array.
        Example:

        //  should return true
        [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
        [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

        //  should return false
        [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
        [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

* @param {Array} array
* @return {Boolean}
*/

Array.prototype.sameStructureAs = function (array) {
  var i;

  for(i = 0; i < this.length; i++){
    if(Array.isArray(this[i]) && Array.isArray(array[i])){
      if(!this[i].sameStructureAs(array[i])){
        return false;
      }

    }else if(!Array.isArray(this[i]) && Array.isArray(array[i])){
      return false;

    }else if(Array.isArray(this[i]) && !Array.isArray(array[i])){
      return false;
    }
  }
  if(i < array.length){
    for(var j = i; j<array.length;j++){
      if(Array.isArray(array[j])){
        return false;
      }               
    }
  }
  return true;
};


/*
    4. Longest sequence with zero sum.
        Write a method which takes an array of integers (positive and negative) and returns
        the longest contiguous sequence in this array, which total sum of elements equal 0.
        Example:

        maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])

        Should return [92, -115, 17, 2, 2, 2]
        because this is the longest zero-sum sequence in the array.

* @ param {Array} arr
* @ return {Array} 
*/

function maxZeroSequenceLength(arr){
  var maxArr = [], sum, i, j;

  for(i = 0; i < arr.length; i++){
    sum = 0;
    for(j = i; j < arr.length; j++){
      sum += arr[j];
      if(sum === 0){
        if(maxArr.length < j-i+1){
          maxArr = arr.slice(i, j+1);
        }
      }   
    }
  }
  return maxArr;
}


/*
    5. Balancing parentheses.
        Write a piece of code to validate that a supplied string is balanced.
        You will be given a string to validate, and a second string, where each pair of characters
        defines an opening and closing sequence that needs balancing.
        Example:

        isBalanced("(Sensei says yes!)", "()")  //  true
        isBalanced("(Sensei says no!", "()")    //  false

        isBalanced("(Sensei [says] yes!)", "()[]")  //  true
        isBalanced("(Sensei [says) no!]", "()[]")   //  false

  * @param {string} str
  * @param {string} parentheses
  * @return {Boolean}
 */

function isBalanced(str, parentheses){
  var stack = [],
    array = str.split(''),
    i;


  if(array.length === 0){
    return true;
  }
  for(i = 0; i < array.length; i++){
    if(isParenthes(array[i])){
      if(isOpenParenthes(array[i])){
        stack.push(array[i]);
      }else {
        if(stack.length === 0){
          return false;
        } 
        if( !checkParenthes(stack.pop(), array[i]) ){   
          return false;   
        }
      }
    }
  }
  return (stack.length === 0) ? true : false;
  
  function isParenthes(symbol){
    return parentheses.includes(symbol);
  }
  function isOpenParenthes(symbol){
    return parentheses.indexOf(symbol) % 2 === 0;   
  }
  function checkParenthes(open, close){
    return parentheses.indexOf(open) + 1 === parentheses.indexOf(close);
  }
}