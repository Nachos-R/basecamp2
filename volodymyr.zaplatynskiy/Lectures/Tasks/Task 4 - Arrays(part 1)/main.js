
/*
* 1. Remove duplicates.
* Write a function that removes duplicate values from an array.
* Example:
*        removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]);     //  [1, 3, 7, 9, 8]
*
* */
var arr = [1, 3, 7, 1, 3, 9, 8, 7];

function removeDuplicates(arr) {
    var i,
        items = [];

    for(i = 0; i < arr.length; i++) {
        if(!items.includes(arr[i])) {
            items.push(arr[i]);
        }
    }
    return items;
}

console.log(removeDuplicates(arr));

/*
* 2. Common values.
* Write a function that returns the common values of two arrays.
* Example:
*        commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [3, 1]
*
* */
var array1 = [3, 4, 6, 3, 1],
    array2 = [5, 10, 7, 1, 3, 9, 8, 7];

function commonValues(array1, array2) {
    var i,
        items = [];
    for(i = 0; i < array1.length; i++) {
        if(array2.includes(i) && !items.includes(i)) {
            items.push(i)
        }
    }
    return items;
}
console.log(commonValues(array1, array2));

/*
* 3. Distinct values.
* Write a function that returns the distinct values of two arrays.
* Example:
*        distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [4, 6, 5, 10, 7, 9, 8]
 * */
var array3 = [3, 4, 6, 3, 1],
    array4 = [5, 10, 7, 1, 3, 9, 8, 7];

function distinctValues(array3, array4) {
    var items = [],
        k,
        j;
    for(k = 0; k < array3.length; k++) {
        if(!array4.includes(array3[k]) && !items.includes(array3[k])) {
            items.push(array3[k]);
        }
    }
    for(j = 0; j < array4.length; j++) {
        if(!array3.includes(array4[j]) && !items.includes(array4[j])) {
            items.push(array4[j]);
        }
    }
    return items;
}
console.log(distinctValues(array3, array4));

/*
* 4. Random.
* Write a function which creates an array with defined size and fills it with random values
* function generateArr(arrSize) {...};
* */
var arrSize = 14;

function generateArr(arrSize) {
    var h,
        items = [];
    for(h = 0; h < arrSize; h++) {
        items[h] = Math.floor(Math.random() * 100);
    }
    return items;
}
console.log(generateArr(arrSize));

/*
* 5. Includes.
* Write your own implementation of Array.prototype.includes() method.
 * */
Array.prototype.myOwnIncludes = function(searchElement, fromIndex) {
    if(typeof fromIndex === 'number') {
        return fromIndex;
    } else {
        return 0;
    }

    if(this.slice(fromIndex).indexOf(searchElement) != -1) {
        return true;
    } else {
        return false;
    }
};