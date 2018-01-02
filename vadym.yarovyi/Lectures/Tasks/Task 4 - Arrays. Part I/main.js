/**
 * 1. Remove duplicates
 * 
 * function returns new array without duplicates
 * 
 * @param {array} arr
 */
function removeDuplicates(arr) {
    var newArr = [],
        i;

    for(i = 0; i < arr.length; i++) {

        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

/**
 * 2. Common values
 * 
 * function returns new array with common values of two arrays
 * 
 * @param {array} arr1
 * @param {array} arr2
 */
function commonValues(arr1, arr2) {
    var newArr = [],
        i;

    for(i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1 && newArr.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
    }

    return newArr;
}

/**
 * 3. Distinct values
 * 
 * function returns new array with distinct values of two arrays
 * 
 * @param {array} arr1
 * @param {array} arr2
 */
function distinctValues(arr1, arr2) {
    var newArr = [],
        i;

    for(i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1 && newArr.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
    }

    for(i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1 && newArr.indexOf(arr2[i]) == -1) {
            newArr.push(arr2[i]);
        }
    }

    return newArr;
}

/**
 * 4. Random
 * 
 * function returns new array with defined size and filled random values
 * 
 * @param {number} arrSize
 */
 function generateArr(arrSize) {
    var newArr = [],
        random,
        i;
    
    for (i = 0; i < arrSize; i++) {
        random = Math.round(Math.random() * 10);

        newArr.push(random);
    }

    return newArr;
 }

 /**
  * 5. Includes
  *
  * my own implementation of Array.prototype.includes() method
  *
  * @param {...} elem
  * @param {number} start
  */
  Array.prototype.myIncludes = function(elem, start) {
    start = typeof start === 'number' ? start : 0;
    
    if (this.slice(start).indexOf(elem) != -1) {
        return true;
    } else {
        return false;
    }
  };