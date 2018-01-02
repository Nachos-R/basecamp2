/*
    1. Filter.
        Write your own implementation of Array.prototype.filter() method
        
    @param   {function} func           
    @param   {Array} thisArg 
    @returns {Array} result    
*/

Array.prototype.myFilter = function (func, thisArg = this) {
    let result = [],
        i;

    for (i of thisArg) {
        if (func.call(thisArg, i)) {
            result.push(i);
        }
    }
    return result;
};

/*
    2. Remove Zeros.
        Write a function that takes an array of values and moves all elements that are zero to the end of the array,
        otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
        Example:

        [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
        is transformed into
        [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
        
  @param   {Array} arr 
  @returns {Array}
 */
function removeZeros(arr) {
    let i,
        arrZero = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            i = i - 1;
            arrZero.push(0);
        }
    }
    return arr.concat(arrZero);
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
        
        @param {Array} arr
        @returns {boolean}
*/

Array.prototype.sameStructureAs = function (arr) {
    let i;
    if (arr.length == this.length) {
        for (i in arr) {
            if (arr[i].push != this[i].push) {
                return false;
            }
        }
        return true;
    }
}

/*

    4. Longest sequence with zero sum.
        Write a method which takes an array of integers (positive and negative) and returns
        the longest contiguous sequence in this array, which total sum of elements equal 0.
        Example:

        maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])

        Should return [92, -115, 17, 2, 2, 2]
        because this is the longest zero-sum sequence in the array.

    @param   {Array} arr 
    @returns {Array} 
 */
function maxZeroSequenceLength(arr) {
    let result = [],
        sum = 0,
        i = 0,
        j;

    for (i in arr) {
        for (j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum == 0) {
                if (arr.slice(i, j + 1).length > result.length) {
                    result = arr.slice(i, j + 1);
                }
            }
        }
        sum = 0;
    }
    return result;
}

/*
    5. Balancing parentheses.
        Write a piece of code to validate that a supplied string is balanced.
        You will be given a string to validate, and a second string, where each pair of characters
        defines an opening and closing sequence that needs balancing.
        Example:

        isBalanced("(Sensei says yes!)", "()"),  //  true
        isBalanced("(Sensei says no!", "()"),    //  false
        isBalanced("(Sensei [says] yes!)", "()[]"),  //  true
        isBalanced("(Sensei [says) no!]", "()[]"),   //  false

 
        @param   {string}  str   
        @param   {string}  audit 
        @returns {boolean} 
 */
function isBalanced(str, audit) {
    let i,
        result = []; // //create a new array where only the required characters

    str = str.split('');
    audit = audit.split('');
    for (i of str) {
        if ((i == '(') || (i == ')') || (i == '[') || (i == ']')) {
            result.push(i);
        }
    }
    if (result.length % 2 != 0) {
        return false; // if( "[ ( ]" and "( ] )" ) - false
    }
    for (i = 0; i < result.length; i++) {
        if ((result[i] == '[') && ((result[i + 1]) == ']') ||
            (result[i] == '(') && ((result[i + 1]) == ')')) {

            result.splice(i, 2); // remove [],()
            i = 0; //update counter
        }
    }

    for (i = 0; i < result.length; i++) {
        if (((result[i] == '[') != (result[result.length - i - 1] == ']')) ||
            ((result[i] == '(') != (result[result.length - i - 1]) == ')')
        ) {
            return false; // if (  "[ )" and "( ]"  ) - false
        }
    }
    return true;
}
