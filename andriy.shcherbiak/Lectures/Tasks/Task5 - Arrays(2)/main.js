//1. Filter.
/**
 * @param {Function} func
 * @returns {Array}
 * 
 */ 

Array.prototype.myFilter = function(func){
var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
var array = this,
    res = [],
    i;

for (i = 0;i<array.length;i++){
    if (func.call(thisArg, array[i], i)) {
        res.push(array[i]);
      }
}

return res;

}
// 2. Remove Zeros.

/**
 * 
 * @param {Array} array 
 * @returns {Array}
 * 
 */
  var moveZeroes = function(array) {
    var i, temp;

    for (i = array.length; i>0; i--) {
        if(array[i] === 0) {
            temp = array.splice(i, 1);
            array.push(temp[0]);
        }
    }
    return array;
};

//3.Nesting Structure Comparison.

/**
 * 
 * @param {Array} arr
 * @returns {Boolean}
 * 
 */
Array.prototype.sameStructureAs = function (arr){
    if (this.length !== arr.length) {
        return false;
      }
  for(var i = 0;i<this.length;i++){
      if(Array.isArray(this[i])&&Array.isArray(arr[i])){
       if(!this[i].sameStructureAs(arr[i])){
           return false;
       }
    }
    else if(Array.isArray(this[i])&&!Array.isArray(arr[i])){
        return false;
    }
    else if(!Array.isArray(this[i])&&Array.isArray(arr[i])){
     return false;
 }  
}
return true;
}

//4. Longest sequence with zero sum.

/**
 * 
 * @param {Array} arr 
 * 
 */

function maxZeroSequenceLength(arr) {
       var res = [],
            temp = [],
           sum,
            i,
            j;
    
        for (i = 0; i < arr.length; i++) {
            sum = 0;
            for (j = i; j < arr.length; j++) {
             
                sum += arr[j];
    

                if(sum===0){
                    temp = arr.slice(i,j+1);
                    if(temp.length>res.length){
                        res = temp;
                        break;
                    }
                }
               
        }
  

    }
    return res;

}

//5. Balancing parentheses.

/**
 * 
 * @param {String} str 
 * @param {String} cond 
 * @return {Boolean}
 * 
 */



function isBalanced(str, cond){
     var temp = [],
        strArr = str.split(''),
        condition = cond.split(''),
        i;
   
      for(i = 0; i < strArr.length; i++){
        if(condition.includes(strArr[i])){
         if(condition.indexOf(strArr[i]) % 2 === 0){
            temp.push(strArr[i]);
          }else {
            if(temp.length === 0){
              return false;
            } 
            if( !(condition.indexOf(temp.pop()) + 1 === condition.indexOf(strArr[i]))){   
             return false;   
            }
          }
        }
      }
      return (temp.length === 0) ? true : false;
      

    }
 