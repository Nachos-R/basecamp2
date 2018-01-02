/**
 * Implementation of Array.prototype.filter() method
 */

Array.prototype.newFilter = function(callback) {
    if (typeof callback !== 'function') {
        throw new Error(callback + " not a function");
    }
    let resultArr = [],
        i, len;
    // this.length its length, of our array(which we will filter)
    for (i = 0, len = this.length; i < len; i++) {
        if (callback(this[i])) { //callback must return true for element from array
            resultArr.push(this[i]);
        }
    }
    return resultArr;
};

var filtered = [12, 5, 8, 130, 44].newFilter(function(el) {
    return el >= 10;
}); // => [12,130,44]

/**
 * function that takes an array of values and moves all 
    elements that are zero to the end of the array,
    otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
 * @param {*array} array 
 */

function removeZeros(array) {
    let arr = array.slice(),
        i, len, value;
    for (i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === 0) {
            value = arr.splice(arr.indexOf(arr[i]), 1);
            arr.push(value[0]);
        }
    }
    return arr;
}

var zeros = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
removeZeros(zeros); // => [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

/**
 *  Function which returns true when its argument is an 
 *  array that has the same nesting structure    
 *  as the first array.
 */

Array.prototype.sameStructureAs = function(array) {
    if (this.length !== array.length) {
        return false;
    }
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === typeof array[i] || Array.isArray(this[i]) && Array.isArray(array[i])) {
            return true;
        }
    }
    return false;
};

[1, 1, 1].sameStructureAs([2, 2, 2]); //true
[1, [1, 1]].sameStructureAs([2, [2, 2]]); //true

/**
 * Longest sequence with zero sum.
 * @param {*array} array 
 */

function maxZeroSequenceLength(array) {
    let resultArr = [],
        sum, lastNum, i, j, len;
    for (i = 0, len = array.length; i < len; i++) {
        sum = 0, lastNum = 0;
        for (j = i; j < len; j++) {
            sum += array[j];
            if (sum === 0) {
                lastNum = j;
            }
        }
        if (resultArr.length <= lastNum - i) {
            resultArr = array.slice(i, lastNum + 1);
        }
    }
    return resultArr;
}

maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
    // => [92, -115, 17, 2, 2, 2]

/**
 * Write a piece of code to validate that a supplied string is balanced.
 * You will be given a string to validate, and a second string, 
 * where each pair of characters
 * defines an opening and closing sequence that needs balancing.
 * @param{}
 */

function isBalanced(str, condition) {
    let open = [],
        close = [],
        cond = condition.split(""),
        i, character, len;
    for (i = 0, len = str.length; i < len; i++) {
        character = str[i];
        if (character === "(" || character === "[") {
            open.push(character);
        } else if (character === ")" || character === "]") {
            close.push(character);
        }
    }
    if (open.length === close.length) {
        return true;
    }
    return false;
}

isBalanced("(Sensei says yes!)", "()") //  true
isBalanced("(Sensei says no!", "()") //  false