/**
 * my implementation of "filter" function
 * @param {Function} callback 
 * @param {Number} start 
 * @return {Array}
 */
Array.prototype.myFilter = function(callback, thisArg)
{
	var result = [],
	i;
	if(arguments.length == 1 && typeof callback == 'function')
	{
		for(i = 0; i < this.length; i++)
		{
			if(callback(this[i], i, this))
			{
				result.push(this[i]);
			}
		}
		return result;
	}

	else if(arguments.length == 2 && typeof callback == 'function' && typeof thisArg == 'object')
	{
		for(i = 0; i < thisArg.length; i++)
		{
			if(callback(thisArg[i], i, thisArg))
			{
				result.push(thisArg[i]);
			}
		}
		return result;
	}
	else throw new TypeError("Invalid type of arguments");
};

/**
 * removes zeros to the end of array
 * @param {Array} arr 
 * @return {Array}
 */
function removeZeros(arr)
{
	if(isArray(arr))
	{
		var i, 
		tempArr = [];

		for(i = 0; i < arr.length; i++)
		{
			if(arr[i] === 0)
			{
				tempArr.push(arr[i]);
				arr.splice(i, 1);
				if(arr[i+1] !== 0)
				{
					i--;
				}
			}
			
		}
		return arr.concat(tempArr);
	}
	
	else throw new TypeError("Argument must be an array");
}

/**
 * checks whether two arrays have the same structure
 * @param {Array} arr 
 * @return {Boolean}
 */
Array.prototype.sameStructureAs = function(arr)
{
	var i;

	if(isArray(this) && isArray(arr))
	{
		for(i = 0; i < this.length; i++)
		{
			if(Array.isArray(this[i]) && Array.isArray(arr[i]))
			{
				if(!this[i].sameStructureAs(arr[i]))
				{
					return false;
				}
			}
			else 
			{
				if(!(Array.isArray(this[i]) && !(Array.isArray(arr[i]))))
				{
					continue;
				}
				else
				{
					return false;
				}
			}
			
		}

		return true;
	}
	else throw new TypeError("Invalid type of arguments");
};

/**
 * finds the longest sequence wich sum is zero
 * @param {Array} arr 
 * @return {Array}
 */
 function maxZeroSequenceLength(arr)
 {
 	var sum,
 	arrCopy = arr.slice(),
 	arrOfSec = [],
 	maxLength = 0,
 	i, j;

 	if(isArray(arr))
 	{
 		for(i = 0; i < arr.length; i++)
	 	{
	 		sum = arr[i];
	 		for(j = i + 1; j < arr.length; j++)
	 		{
	 			sum += arr[j];
	 			if(!sum)
	 			{
	 				arrOfSec.push(arrCopy.slice(i, j + 1));
	 			}
	 		}
	 	}

	 	for(i = 0; i < arrOfSec.length; i++)
	 	{
	 		if(arrOfSec[i].length > maxLength)
	 		{
	 			maxLength = arrOfSec[i].length;
	 		}
	 	}

	 	for(i = 0; i < arrOfSec.length; i++)
	 	{
	 		if(arrOfSec[i].length === maxLength)
	 		{
	 			return arrOfSec[i];
	 		}
	 	}
 	}
 	else throw new TypeError("Argument must be an array");
 }

/**
 * checks whether brackets are balanced
 * @param {String} str 
 * @param {String} checkStr
 * @return {Boolean}
 */
 function isBalanced(str, checkStr)
 {
 	var strCopy = str.slice(),
 	balanceVal = 0,
 	i, j;

 	if(typeof str == 'string' && typeof checkStr == 'string')
 	{
		strCopy = strCopy.split('').filter(function(str)
	 	{	
	 		for(i = 0; i < checkStr.length; i++)
	 		{
	 			if(str.includes(checkStr[i]))
		 		{
		 			return true;
		 		}
	 		}
	 	});
	 	strCopy = strCopy.join('');
	 	
	 	if(strCopy.length % 2 === 1)
	 	{
	 		return false;
	 	}

	 	if(strCopy.search(/\[\)\]/g) != -1)
	 	{
	 		return false;
	 	}
	 	else if(strCopy.search(/\(\[\)/g) != -1)
	 	{
	 		return false;
	 	}
	 	else if(strCopy.search(/\(\]\)/g) != -1)
	 	{
	 		return false;
	 	}
	 	else if(strCopy.search(/\[\(\]/g) != -1)
	 	{
	 		return false;
	 	}
	 	return true;
 	}
 	else throw new TypeError("Invalid type of arguments");
 }
