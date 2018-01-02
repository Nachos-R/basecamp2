//1. Remove duplicates.
/**
 * 
 * @param {Array} arr
 * @returns {Array}
 * 
 */
 
function removeDuplicates(arr) {
    var result = [],
          i;
    
        for(i = 0; i < arr.length; i++) {
         if (!(result.includes(arr[i]))){
             result.push(arr[i]);
         }
       }
    
      return result;
    }
/*
var testArray = [1, 3, 7, 1, 3, 9, 8, 7];
console.log(removeDuplicates(testArray)); // [1, 3, 7, 9, 8]
*/


//2. Common values.
/**
 * 
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} 
 * 
 */

        function commonValues(arr1,arr2){
          var result = [],i,j;


          for (i=0;i<arr1.length;i++){
              if(arr2.includes(arr1[i])){
                  result.push(arr1[i]);
              }
          }  
       
          for (j=0;j<arr2.length;j++){
            if(arr1.includes(arr2[j])){
                result.push(arr2[j]);
            }
        }    

          result = removeDuplicates(result);
          return result;

    }
/*
    var testArr1 = [3, 4, 6, 3, 1];
    var testArr2 = [5, 10, 7, 1, 3, 9, 8, 7];

    console.log(commonValues(testArr1,testArr2)); //[3, 1]
*/


//3.Distinct values.
/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array} 
 * 
 */

    function distinctValues(arr1,arr2){
        var result = [],i;
        var concArr = arr1.concat(arr2);
      
        for (i=0;i< concArr.length;i++){
            if(concArr.indexOf(concArr[i]) == concArr.lastIndexOf(concArr[i])){
                result.push(concArr[i]);
            }
            }
        
        return result;
         
    
    }
/*
   var testArr1 = [3, 4, 6, 3, 1];
   var testArr2 = [5, 10, 7, 1, 3, 9, 8, 7];

   console.log(distinctValues(testArr1,testArr2)); //[4, 6, 5, 10, 9, 8]
*/

  // 4. Random.
  
  /**
   * 
   * @param {Number} arrSize 
   * @returns {Array} 
   * 
   */

   function generateArr(arrSize){
   var result = [],
        i;
    for (i=0;i<arrSize;i++){
        result.push(Math.round(Math.random()*10));
    }
return result;

   }

  // console.log(generateArr(3));


  //5. Includes.
  
  /**
   * 
   * @param {Number} searchElemen
   * @param {Number} fromIndex
   * @returns {Boolean} 
   * 
   */

   Array.prototype.myIncludes = function(searchElemen, fromIndex = 0) {
    var i;
    if (fromIndex < 0) {
        fromIndex = this.length + fromIndex
    }

    for (i = fromIndex; i <= this.length; i++) {
        if (i === searchElemen) {
            return true;
        }
    }
    return false;

}

/*
var TestArr = [3, 1, 4, 5, 4, 4]

console.log(TestArr.myIncludes(3, -1)); //false
console.log(TestArr.includes(3, -1));   //false
*/