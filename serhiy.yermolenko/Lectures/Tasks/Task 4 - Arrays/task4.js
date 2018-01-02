/**
 * Removes duplicates from array
 * @param {Array} arr 
 * @return {Array}
 */
function removeDuplicates(arr)
{
	"use strict";
	var i, j;
	if(Array.isArray(arr))
	{
		for (i = 0; i < arr.length; i++) 
		{
			for(j = i + 1; j < arr.length; j++)
			{
				if(arr[i] === arr[j])
				{
					arr.splice(j, 1);
					j--;
				}
			}
		}
		return arr;
	}
	else
	{
		throw new TypeError("Invalid type of arguments");
	}
}

/**
 * Finds an array of common values from arr1 and arr2
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function commonValues(arr1, arr2)
{
	"use strict";
	var resArr = [],
	i, j, 
	result;

	if(Array.isArray(arr1) && Array.isArray(arr2))
	{
		for(i = 0; i < arr1.length; i++)
		{
			for(j = 0; j < arr2.length; j++)
			{
				if(arr1[i] === arr2[j])
				{
					resArr.push(arr1[i]);
				}
			}
		}
		result = removeDuplicates(resArr);
		return result;
	}
	else 
	{
		throw new TypeError("Invalid type of arguments");
	}
}

/**
 * Finds an array of distinct values from arr1 and arr2
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function distinctValues(arr1, arr2)
{
	"use strict";
	var resArr = [],
	i, j,
	result;

	if(Array.isArray(arr1) && Array.isArray(arr2))
	{
		for(i = 0; i < arr1.length; i++)
		{
			if(!arr2.includes(arr1[i]))
			{
				resArr.push(arr1[i]);
			}
		}

		for(j = 0; j < arr2.length; j++)
		{
			if(!arr1.includes(arr2[j]))
			{
				resArr.push(arr2[j]);
			}
		}

		result = removeDuplicates(resArr);
		return result;
	}
	else
	{
		throw new TypeError("Invalid type of arguments");
	}
}

/**
 * Creates an array of "arrSize" length and fills it by random integer numbers
 * @param {Number} arrSize 
 * @return {Array}
 */
function generateArr(arrSize)
{
	"use strict";
	var resArr = [],
	i;

	if(arrSize > 0 && Number.isInteger(arrSize))
	{
		for(i = 0; i < arrSize; i++)
		{
			resArr.push(randomMinMax(-10, 10));
		}
		return resArr;
	}
	else
	{
		throw new Error("Invalid size of array or type of arguments");
	}

	/**
	 * Generates random number in "min" - "max" range
	 * @param {Number} min
	 * @param {Number} max
	 * @return {Number}
	 */
	function randomMinMax(min, max)
	{
		if(Number.isInteger(min) && Number.isInteger(max))
		{
			return +(min + Math.random()*(max - min)).toFixed(0);
		}
		else
		{
			throw new TypeError("Invalid type of arguments");
		}
	}

}

/**
 * Finds an array of distinct values from arr1 and arr2
 * @param {Object} value
 * @param {Number} [index]
 * @return {Boolean}
 */
Array.prototype.includes = function()
{
	"use strict";
	var i,
	obj = new Object(this);

	if(this === null)
	{
		throw new TypeError("This is null");
	}
	else if(!(Array.isArray(obj)))
	{
		throw new TypeError("This is not an array");
	}
	else 
	{
		if(arguments.length == 1)
		{
			for(i = 0; i < obj.length; i++)
			{
				if(obj[i] === arguments[0])
				{
					return true;
				}
			}
		}
		else if(arguments.length == 2)
		{
			for(i = arguments[1]; i < obj.length; i++)
			{
				if(obj[i] === arguments[0])
				{
					return true;
				}
			}
		}	
	}	
	return false;
};

/**
 * Test area
 */

/*console.log(removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]));
console.log(commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]));
console.log(distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]));
console.log(generateArr(5));

var test = [1,3,5,7,8,9];
console.log(test.includes(3, 4));
console.log(test.includes(3));*/
