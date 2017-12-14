
/*
 * 1. Filter.
 * Write your own implementation of Array.prototype.filter() method
 *
 * */

Array.prototype.myOwnFilter = function(callback, context) {
    arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

/*
 * 2. Remove Zeros.
 * Write a function that takes an array of values and moves all elements that are zero to the end of the array,
 * otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
 * Example:
 *        [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
 * is transformed into
 *        [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
 * */

var array = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

function removeZeros(array) {
    var arr = array.filter(function(x) {
            return Number(x);
        }),
        arr2 = new Array(array.length - arr.length);
    arr2.fill(0);
    var arr3 = arr.concat(arr2);
    return arr3;
}

removeZeros(array); //  [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]



/*
 * 3. Nesting Structure Comparison.
 * Write a function which returns true when its argument is an array that has the same nesting structure as the first array.
 * Example:
 *
 *  should return true
 *  [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
 *  [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
 *
 *  should return false
 *  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
 *  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
 *
 * */

Array.prototype.sameStructureAs = function (other) {

    if (this.length !== other.length) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (isArray(this[i]) && isArray(other[i])) {
            if (!this[i].sameStructureAs(other[i])) { return false; }
        } else if (!isArray(this[i]) && isArray(other[i])) {
            return false;
        } else if (isArray(this[i]) && !isArray(other[i])) {
            return false;
        }
    }
    return true

};


/*
 * 4. Longest sequence with zero sum.
 * Write a method which takes an array of integers (positive and negative) and returns
 * the longest contiguous sequence in this array, which total sum of elements equal 0.
 * Example:
 *
 * maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
 *
 * Should return [92, -115, 17, 2, 2, 2]
 * because this is the longest zero-sum sequence in the array.
 *
 */

var arr = [25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11];

// function maxZeroSequenceLength(arr) {
//     var maxLen = [], i, j;
//     var max;
//     var zeroSum = 0;
//     for(i = 0; i < arr.length; i++) {
//         for(j = i; j < arr.length; j++) {
//             zeroSum += arr[j];
//             if(zeroSum == 0) {
//                 return max = Math.max.apply(null, ); // todo fix this line
//             }
//         }
//     }
// }


/*
 * 5. Balancing parentheses.
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
 */
