/**
 * Function which remove duplicate number from array
 * @param {*initial array} array 
 */
function removeDuplicates(array) {
    let resultArr = array.filter(function(value, index, array) {
        return array.indexOf(value) === index;
    });
    return resultArr;
}

removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]); // [1, 3, 7, 9, 8]

/**
 * Function that returns the common values of two arrays.
 * @param {*} array1 
 * @param {*} array2 
 */
function commonValues(array1, array2) {
    let resultArr = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j] && resultArr.indexOf(array1[i]) === -1) {
                resultArr.push(array1[i]);
            }
        }
    }
    return resultArr;
}

commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]); //  [3, 1]

/**
 * Write a function that returns the distinct values of two arrays.
 * @param {*} array1 
 * @param {*} array2 
 */
function distinctValues(array1, array2) {
    let resultArr2 = [];
    array1.filter(function(el) {
        if (array2.indexOf(el) === -1) {
            resultArr2.push(el);
            return true;
        }
        return false;
    });
    array2.filter(function(el) {
        if (array1.indexOf(el) === -1 && resultArr2.indexOf(el) === -1) {
            resultArr2.push(el);
            return true;
        }
        return false;
    });
    return resultArr2;
}

distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);

/**
 * Function which creates an array with defined 
 * size and fills it with random values (from 1 to 10)
 * @param {*size of future array} arrSize 
 */
function generateArr(arrSize) {
    let arr = new Array(arrSize),
        randomNum;
    for (let i = 0; i < arr.length; i++) {
        randomNum = Math.floor(Math.random() * 10) + 1;
        arr[i] = randomNum;
    }
    return arr;
};

generateArr(10); // => [1,2,3,4,5,6,7,8,9,10];

/**
 * Method determines whether an array includes a certain element, 
 * returning true or false as appropriate.
 * @param {*el which will be check} element 
 * @param {*start from(by default value = 0)} index 
 */
Array.prototype.newInclude = function(element, index) {
    let startIndex = index || 0,
        arr = this.slice(startIndex);

    for (let i = 0; i < arr.length; i++) {
        if (element === arr[i] || Number.isNaN(arr[i]) && Number.isNaN(element)) {
            return true;
        }
    }
    return false;
}

[1, 2, 3, 4, 5].newInclude(4) // => true