/**
 * 1. Filter.
 * 
 * My own implementation of Array.prototype.filter() method.
 * 
 * @param {...} value
 */
Array.prototype.myFilter = function(callback) {
    var arr = [],
        i;

    for(i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            arr.push(this[i]);
        }
    }

    return arr;
}

/**
 * 2. Remove Zeros.
 * 
 * Function takes an array of values and moves all elements that are zero to the end of the array
 * 
 * @param {array} arr
 */
function removeZeros(arr) {
    var arrayOfValues = [],
        arrayOfZeros  = [],
        i;

    for(i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            arrayOfZeros.push(0);   
        } else {
            arrayOfValues.push(arr[i]);
        }
    }

    return arrayOfValues.concat(arrayOfZeros);
}

/**
 * 3. Nesting Structure Comparison.
 * 
 * Method which returns true when its argument is an array that has the same nesting structure as the first array
 * 
 * @param {array} arr
 */
Array.prototype.sameStructureAs = function(arr) {
    var i;

    for(i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && arr[i] instanceof Array) {
            if (!this[i].sameStructureAs(arr[i])) {
                return false;
            }
        } else if (!(this[i] instanceof Array) && !(arr[i] instanceof Array)) {
            continue;
        } else {
            return false;
        }
    }

    return true;
};

/**
 * 4. Longest sequence with zero sum.
 * 
 * Function which takes an array of integers (positive and negative) and returns
 * the longest contiguous sequence in this array, which total sum of elements equal 0.
 * 
 * @param {array} arr
 */
function maxZeroSequenceLength(arr) {
    var maxSequence = [],
        sum = 0,
        i,
        j;

    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum === 0) {
                if (arr.slice(i, j + 1).length > maxSequence.length) {
                    maxSequence = arr.slice(i, j + 1);
                    break;
                }
            }
        }

        sum = 0;
    }

    return maxSequence;
}

/**
 * 5. Balancing parentheses.
 * 
 * Function validate that a supplied string is balanced.
 * 
 * @param {string} string
 * @param {string} condition
 */
function isBalanced(string, condition) {
    var parentheses = string.split(/[^()\[\]]/gi).join("");

    if (parentheses.length % 2 != 0) {
        return false;
    }

    if (parentheses.search(/\[\)\]/g) != -1) {
        return false;
    } else if (parentheses.search(/\[\(\]/g) != -1) {
        return false;
    } else if (parentheses.search(/\(\]\)/g) != -1) {
        return false;
    } else if (parentheses.search(/\(\[\)/g) != -1) {
        return false;
    }

    return true;
}