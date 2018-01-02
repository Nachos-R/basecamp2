/*

    1. Remove duplicates.
        Write a function that removes duplicate values from an array.
        Example:

        removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]);     //  [1, 3, 7, 9, 8]
*/

function removeDuplicates(arr) {
    let result = [],
        i;

    for (i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }

    return result;
}

/*
    2. Common values.
        Write a function that returns the common values of two arrays.
        Example:

        commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [3, 1]
*/

function commonValues(arr1, arr2) {
    let result = [],
        i;

    for (i of arr1) {
        if (arr2.includes(i) && !result.includes(i)) {
            result.push(i);
        }
    }

    return result;

}

/*
    3. Distinct values.
        Write a function that returns the distinct values of two arrays.
        Example:

        distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [4, 6, 5, 10, 7, 9, 8]
*/

function distinctValues(arr1, arr2) {
    let result = [],
        i;

    for (i of arr1) {
        if (!arr2.includes(i) && !result.includes(i)) {
            result.push(i);
        }
    }

    for (i of arr2) {
        if (!arr1.includes(i) && !result.includes(i)) {
            result.push(i);
        }
    }

    return result;
}

/*
    4. Random.
        Write a function which creates an array with defined size and fills it with random values

        function generateArr(arrSize) {...};
*/

function generateArr(arrSize) {
    let result = [],
        i;

    for (i = 0; i < arrSize; i++) {
        result.push(Math.floor(Math.random() * (10 - 0)) + 0);
    }

    return result;
}

/*
    5. Includes.
        Write your own implementation of Array.prototype.includes() method.
 */

Array.prototype.MyIncludes = function (el, start = 0) {
    let arr = this,
        i,
        result = false;

    for (start; start < arr.length; start++) {
        
        if (arr[start] == el) {
            result = true;
        }
        
    }

    return result;
}
