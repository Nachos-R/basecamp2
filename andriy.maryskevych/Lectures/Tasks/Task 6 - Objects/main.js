// 1
function taraverse(obj, separator)
{
	var val;
    separator = separator || "";
    for(val in obj)
    {
        if(typeof obj[val] == "object")
        {
            console.log(separator + " " + val);
            taraverse(obj[val], separator + " |");
        }
        else
        {
            console.log(separator + " " + val + " : " + obj[val]);      
        } 
    }
}

// 2
Object.prototype.Create = function(proto, properties)
{
    var object;
    if(proto !== null || typeof proto != 'object')
    {
        throw new TypeError();
    }

    function F(){}
    F.prototype = proto;
    
    object = new F();

    if(properties)
    {
        Object.defineProperties(object, properties);
    }

    return object;
}

// 3
Object.prototype.hash = function(path)
{
    var pos, substr;
    pos = path.indexOf('.');
    if(pos != -1)
    {        
        substr = path.slice(0, pos);
        if(this[substr])
        {
            return this[substr].hash(path.slice(pos + 1, path.length));
        }
    }
    else
    {
        return this[path];
    }
}

// 4
function send(config) 
{
    config = defaults(config, {
        url: mandatory("No URL!"),
        method: "POST",
        data: {}
    });

    //Network.send(config.url, config.data, config.method);
}

function defaults(config, properties)
{
    for(let key in properties)
    {
        if(!(key in config))
        {
            if(properties[key].throw)
            {
                throw new Error(properties[key].message);
            }
            else
            {
                config[key] = properties[key];
            }
        }
    }
    return config;
}

function mandatory(message)
{
    return {
        throw : true,
        message : message
    };
}

//5 
function mix(...objects) 
{
    var res = {}, i, p;
    for(i = 0; i < objects.length; i++)
    {
        for(p in objects[i]) 
        {
            if(!(p in res))
            {
                res[p] = objects[i][p];
            }
        }
    }
    return res;
}

// 6
Function.prototype.Bind = function(obj)
{
    if(!this.init)
    {
        this.init = this;
    }
    var f = this.init, 
        result = function(...params)
        {     
            return f.apply(obj, params);
        }
    result.init = f;
    return result;
}