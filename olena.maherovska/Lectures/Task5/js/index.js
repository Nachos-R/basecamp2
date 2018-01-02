/*
 @param {function} callback
 @return {Array} result
*/

if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback) {
    if (typeof(callback) !== 'function') {
      throw new TypeError();
    }
    let result;
    result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  }
}


/*
 @param {Array} arr
 @return {Array} array_without_zero
*/

function removeZeros(arr) {
  let result;
  result = arr.filter(elem => elem !== 0);
  return result.concat(new Array(arr.length - result.length).fill(0));
}


/*
 @param {Array} arr
 @return {Boolean}
*/

Array.prototype.sameStructureAs = function(arr) {
  if (this.length !== arr.length) {
    return false;
  }
  if (this.every(function(elem, i) {
      return Array.isArray(elem) ? elem.sameStructureAs(arr[i]) : true
    })) {
    return true;
  } else {
    return false;
  }
}

/*
 @param {Array} arr
 @return {theLongestSequel}
*/

function maxZerosequeluenceLength(arr) {
  let theLongestSequel, sum, sequelEnd;

  theLongestSequel = [];

  for (let i = 0; i < arr.length; i++) {
    sum = 0,
      sequelEnd = 0

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === 0) {
        sequelEnd = j;
      }
    }

    if (theLongestSequel.length <= sequelEnd - i) {
      theLongestSequel = arr.slice(i, sequelEnd + 1)
    }
  }

  return theLongestSequel;
}

/*
 @param {String} str
 @param {String} brackets
 @return {Boolean}
*/

function isBalanced(str, brackets) {
  let pure_brackets, openBrackets, closeBrackets, k;
  openBrackets = [];
  closeBrackets = [];
  pure_brackets = str.match(/[^a-zA-Z0-9]/gi).filter(elem => brackets.includes(elem)).join("");
  for (let i = 0; i < pure_brackets.length; i++) {
    if ( pure_brackets[i] === '(' || pure_brackets[i] === '[') {
      openBrackets.push(pure_brackets[i]);
    } else {
      closeBrackets.push(pure_brackets[i]);
    }
  }
  if (openBrackets.length === closeBrackets.length) {
    k = true;
    return true;
  }
  if (pure_brackets.length % 2 !== 0) {
    k = false;
    return false;
  }
  return k;
}
