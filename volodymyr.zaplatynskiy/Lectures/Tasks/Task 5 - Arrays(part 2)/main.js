
/**
 1. Filter.
 Write your own implementation of Array.prototype.filter() method
 *
 *   @param callback - callback function
 *   @param context - 'this' for our function
 *   @param {Array} arr - array for filtered values
 *
 *   @returns {Array} arr - array with filtered values
 */

Array.prototype.myFilter = function(callback, context) {
    let arr = [],
        i;
    for (i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};


/**
 2. Remove Zeros.
 *  Write a function that takes an array of values and moves all elements that are zero
 *  to the end of the array, otherwise preserving the order of the array.
 *  The zero elements must also maintain the order in which they occurred.
 *  Example:
 *        [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
 * is transformed into
 *        [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
 *
 *   @param {Array} array - initial array
 *   @param {Array} arr - filtered array (without zeros)
 *   @param {Array} arr2 - array filled with zeros
 *   @param {Array} arr3 - concatenated array
 *
 *   @returns {Array} - return concatenated array
 */

let array = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

function removeZeros(array) {
    let arr = array.filter(function(x) {
            return Number(x);
        }),
        arr2 = new Array(array.length - arr.length);
    arr2.fill(0);
    return arr.concat(arr2);
}

removeZeros(array); //  [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]


/**
 3. Nesting Structure Comparison.
 * Write a function which returns true when its argument is an array that has
 * the same nesting structure as the first array.
 * Example:
 *
 * should return true
 * [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
 *
 * should return false
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
 *
 *   @param {Array} other - second array
 *
 *   @returns {Boolean} - return true ot false
 */

Array.prototype.sameStructureAs = function (other) {
    let i;

    if (this.length !== other.length) {
        return false;
    }
    for (i = 0; i < this.length; i++) {
        if (isArray(this[i]) && isArray(other[i])) {
            if (!this[i].sameStructureAs(other[i])) { return false; }
        } else if (!isArray(this[i]) && isArray(other[i])) {
            return false;
        } else if (isArray(this[i]) && !isArray(other[i])) {
            return false;
        }
    }
    return true;

};


/**
 4. Longest sequence with zero sum.
 * Write a method which takes an array of integers (positive and negative) and returns
 * the longest contiguous sequence in this array, which total sum of elements equal 0.
 * Example:
 *      maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
 * Should return [92, -115, 17, 2, 2, 2]
 * because this is the longest zero-sum sequence in the array.
 *
 *   @param {Array} array - started array
 *   @param {number} sum - summation
 *   @param {Array} temp - temporary array
 *   @param {Array} result - resulting array
 *   @param {Array} lengths - array with lengths
 *   @param i - item of array
 *   @param j - item of array
 *
 *   @returns {Array} result - result array with longest total sum equal 0
 */

function maxZeroSequenceLength(array) {
    let sum,
        temp,
        result = [],
        lengths,
        i,
        j;
    for (i = 0; i < array.length; i++) {
        sum = array[i];
        temp = [array[i]];
        for (j = i + 1; j < array.length; j++) {
            sum += array[j];
            temp.push(array[j]);
            if (sum === 0) {
                result.push(temp);
                break;
            }
        }
    }
    lengths = result.map(function(x) {
        return x.length;
    });
    return result[lengths.indexOf(Math.max.apply(null, lengths))];
}

let array = [25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11];

maxZeroSequenceLength(array); // return result[]

/**
 5. Balancing parentheses.
 * Write a piece of code to validate that a supplied string is balanced.
 * You will be given a string to validate, and a second string, where each pair of characters
 * defines an opening and closing sequence that needs balancing.
 * Example:
 *
 * isBalanced("(Sensei says yes!)", "()")  //  true
 * isBalanced("(Sensei says no!", "()")    //  false
 *
 * isBalanced("(Sensei [says] yes!)", "()[]")  //  true
 * isBalanced("(Sensei [says) no!]", "()[]")   //  false
 *
 * @param {string} string
 * @param {string} condition
 *
 * @returns {Boolean} true of false
 */

function isBalanced(string, x) {
    let brackets = string.split(/[^()\[\]]/gi).join('');

    return (brackets.length % 2 != 0) ||
    (brackets.search(/\[\)\]/g) != -1) ||
    (brackets.search(/\[\(\]/g)  != -1) ||
    (brackets.search(/\(\]\)/g) != -1) ||
    (brackets.search(/\(\[\)/g) != -1) ? false: true;

}
