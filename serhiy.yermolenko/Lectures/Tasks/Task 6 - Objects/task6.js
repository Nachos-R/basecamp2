function traverse(obj, separator)
{
	let value;
	for(value in obj)
	{
		if(typeof obj[value] === 'object')
		{
			console.log(separator + " " + value);
			traverse(obj[value], separator + " |");
		}

		else console.log(separator + " " + value + " : " + obj[value]);
	}
}

Object.create = (proto, prop) =>
{
	let obj, props;
	if(typeof proto !== 'object');
	{
		throw new TypeError("Invalid type of arguments");
	}

	function temp(){}
	temp.prototype = proto;
	obj = new temp();

	if(arguments.length == 2 && typeof prop == 'object')
	{
		for(props in prop)
		{
			if(Object.prototype.hasOwnProperty.call(prop, props))
			{
				obj[props] = prop[props];
			}
		}
	}

	return obj;
};

Object.prototype.hash = str =>
{
	var splitted = str.split('.'),
	i, 
	current = this;

	for(i = 0; i < splitted.length; i++)
	{
		if(current[splitted[i]] === undefined)
		{
			return undefined;
		}
		else
		{
			current = current[splitted[i]];
		}
	}

	return current;
};

function mix(...args)
{
	var i,
	j,
	key,
	isPresent;
	result = {};

	for(i = 0; i < args.length; i++)
	{
		if(typeof args[i] == 'object')
		{
			isPresent = false;
			for(key in args[i])
			{
				for(j = 0; j < result.length; j++)
				{
					if(args[i][key] == result[j])
					{
						isPresent = true;
					}
				}
			}

			if(!isPresent)
			{
				result[key] = args[i][key];
			}	
		}
	}

	return result;
} 

Function.prototype.bind = context =>
{
	let fToBind = this;
	if(typeof this !== 'function')
	{
		throw new TypeError('It is not a function');
	}

	return function() 
	{
    	return fToBind.apply(context, arguments);
  	};
};
