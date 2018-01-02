/**
 * Remove duplicates
 * @param {Array} arr
 * @returns {Array}
 */
function RemoveDuplicate(arr)
{
    var obj = {},
        i,
        res = [];    
      for (i = 0; i < arr.length; i++) {        
        obj[arr[i]] = true;
      }        
      for(a in obj)
      {
          res.push(+a);
      }
      return res;
}

/**
 * Common values
 * works like set, not multiset
 * @param {Array} arrayOne
 * @param {Array} arrayTwo
 * @returns {Array} 
 */
function Intersection(arrayOne, arrayTwo)
{
    var first = arrayOne.sort(function(a,b){return a - b;}),
        second = arrayTwo.sort(function(a,b){return a - b;}),
        i = 0,
        j = 0,
        obj = {},
        res = [],
        a;
    while(i != first.length && j != second.length)
    {
        if(first[i] < second[j])
        {
            i++;
        }
        else if(first[i] > second[j])
        { 
            j++;
        }
        else
        {
            obj[first[i]] = true;
            i++;
            j++;
        }   
    }
    for(a in obj)
    {
        res.push(+a);
    }
    return res;
}

/**
 * Distinct values
 * works like set, not multiset
 * @param {Array} arrayOne
 * @param {Array} arrayTwo
 * @returns {Array} 
 */
function SymmetricalDifference(arrayOne, arrayTwo)
{   
    var first = arrayOne.sort(function(a,b){return a - b;}),
        second = arrayTwo.sort(function(a,b){return a - b;}),
        i = 0,
        j = 0,
        obj = {},
        fake= {},
        res = [],
        value;
    while(i != first.length && j != second.length)
    {
        if(first[i] < second[j])
        {
            obj[first[i]] = true;
            i++;
        } 
        else if(first[i] > second[j])
        { 
            obj[second[j]] = true;
            j++;
        }
        else
        {      
            fake[first[i]] = true;      
            i++;
            j++;
        }   
    }
    if(i != first.length)
    {        
        first.slice(i).forEach(function(a){
            obj[a] = true;
        });        
    }
    if(j != second.length) 
    {
        second.slice(j).forEach(function(a){
            obj[a] = true;
        });
    }   
    for(value in obj)
    {
        if(!fake[value])
        {
            res.push(+value);
        }
    }    
    return res;
}

/**
 * Random
 * @param {Number} arrSize
 * @returns {Array} 
 */
function generateArr(arrSize)
{
    var res = new Array(arrSize),
        i;
    for(i = 0; i < arrSize; i++)
    {
        res[i] = Math.round(Math.random() * (arrSize * 10));
    }
    return res;
}

/**
 * Includes
 * @param {Number} elem
 * @param {Number} positoin
 * default value - 0
 * @returns {Boolean} 
 */
Array.prototype.Includes = function(elem, position = 0)
{
    var i;
    if(Number.isNaN(elem))
    {
        if(position < this.length)
        {
            for(i = position; i < this.length; i++)
            {
                if(Number.isNaN(this[i]))
                {
                    return true;
                }
            }
        }
        return false;
    }
    else
    {
        return this.indexOf(elem, position) != -1;
    }
}

