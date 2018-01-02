/*

    1. Remove duplicates.
        Write a function that removes duplicate values from an array.
        Example:

        removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]);     //  [1, 3, 7, 9, 8]

    2. Common values.
        Write a function that returns the common values of two arrays.
        Example:

        commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [3, 1]

    3. Distinct values.
        Write a function that returns the distinct values of two arrays.
        Example:

        distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [4, 6, 5, 10, 7, 9, 8]

    4. Random.
        Write a function which creates an array with defined size and fills it with random values

        function generateArr(arrSize) {...};

    5. Includes.
        Write your own implementation of Array.prototype.includes() method.

 */

/*
 @param {Array} arr
 @return {Array}
*/
function removeDuplicates(arr) {
  let unique_array;
  unique_array = arr.filter((elem, index, self) => index === self.indexOf(elem));
  return unique_array;
}

/*
 @param {Array} arr1
 @param {Array} arr2
 @return {Array}
*/
function commonValues(arr1, arr2) {
  let common_array;
  common_array = arr1.filter((elem, index) => arr2.includes(elem))
    .concat(arr2.filter(elem => arr1.includes(elem)))
    .filter((elem, index, self) => index === self.indexOf(elem));
  return common_array;
}


/*
 @param {Array} arr1
 @param {Array} arr2
 @return {Array}
*/

function distinctValues(arr1, arr2) {

  let distinct_array;
  distinct_array = arr1.filter(elem => !arr2.includes(elem))
    .concat(arr2.filter(elem => !arr1.includes(elem)))
    .filter((elem, index, self) => index === self.indexOf(elem));

  return distinct_array;
}


/*
 @param {Number} arrSize
 @return {Array}
*/

function generateArr(arrSize) {
  let array;
  array = new Array(arrSize);
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor((Math.random() * 100) + 1);
  }
  return array;
}

/*
 @param {Number} elem
 @return {Boolean}
*/
if (!Array.prototype.includes) {
  Array.prototype.includes = function(elem) {
    return this.indexOf(elem) !== -1;
  }
}
