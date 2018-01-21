/*
* 1. Traverse Tree.
* Created iterator for Object.prototype to build a tree of properties and it values of input object with for..of loop
*
* @param {object} obj
*/
Object.prototype[Symbol.iterator] = function*(){
    var obj = this;
    yield(`[${obj.constructor.name}]`)

        tree = function* ( obj, edge ){
            for(var key in obj){
                if (obj.hasOwnProperty(key)){
                    if (String(obj[key])==="[object Object]") {
                        yield (`${edge}-> [${key}]`)
                        yield* tree(obj[key], edge + '|  ')
                    }
                    else 
                        yield (`${edge}-> [${key}]: "${obj[key]}"`)
                }
            }
        }

    yield* tree(obj, "")
}

function consoleGraph(obj){
    for (var value of obj)
        console.log(value)
}

/*******************************************************************************************************************************
* 2. Implementing Object.create.
*
* @param {object} proto
* @return {object} {}
*/
Object.create = function(proto){
    if (typeof proto!=="object") throw TypeError()
    return Object.setPrototypeOf({}, proto);
}

/*******************************************************************************************************************************
* 3. Extract Nested Object Reference.
* Object.prototype method that given a nested path, either return the value or undefined.
*
* @param {string} path
* @return {object} value
*/
Object.prototype.hash = function (path){
    return path.split('.').reduce((acc, item) => {return acc[item]}, this)
};

/*******************************************************************************************************************************
* 4. Default configuration.
* Created a defaults(obj, def) function which creates a new object with obj's properties, 
* falling back on the properties of def when they aren't in obj.
* Implemented the mandatory(err) function. This return an object that tells defaults to throw err if the property doesn't exist.
* 
* @param {object} conf
* @param {object} def
* @return {object} config
*/
function defaults(conf, def){
    var config = JSON.parse(JSON.stringify(conf));      
        for (var key in def){
            if (!(config.hasOwnProperty(key)) && def.hasOwnProperty(key) || !config[key] || typeof(config[key]) == "undefined") 
                if (def[key] instanceof Error) throw def[key];
                else config[key] = def[key];
        }
    return config;
}

/*
* @param {string} message
* @return {object} new Error(message)
*/
function mandatory(message){
    return new Error(message);
}

/*
* @param {object} _config
*/
function send(_config){
    var _default = { 
        url: mandatory("No URL!"), 
        method: "POST", 
        data: {} 
    },
    config = defaults(_config, _default);

    console.log(`Sent:`)
    consoleGraph(config)
}

var _config = { 
    url: "https://url.domain", 
    data: {
        message: "config data"
    }
};

/*******************************************************************************************************************************
* 5. Mix Objects.
* Made a function that returns a new object, containing all of the properties of any objects passed in as parameters.
*
* @param {object} ...objects
* return {object} o
*/
Object.mix = function (...objects){
    var o = new Object()
    for (var i=0; i<objects.length; i++) {
            for (var key in objects[i]){
                if (!o.hasOwnProperty(key) && objects[i].hasOwnProperty(key)) o[key] = objects[i][key]
            }
    }
    return o;
}

/*******************************************************************************************************************************
* 6. Power .bind().
* Overrode the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times.
*
/*
* @param {object} toBind
* @param {object} _this
*/
Function.prototype.bind = function(toBind){
    let _this = this._this || this, f = () => _this.call(toBind);
    f._this = _this;
    return f;
}


/*******************************************************************************************************************************
*   Test object
*/
let obj = {
    person: {
        name: 'joe',
    history: {
        hometown: 'bratislava',
        bio: {
            funFact: 'I like fishing.'
        }
        },
    arr: [0,1,2,3,4,5]
    }
};
/*
*   Results:   
*********************************************************************************************************************************/

// 1.   consoleGraph(obj)

/*
Outputs:

        [Object]
        -> [person]
        |  -> [name]: "joe"
        |  -> [history]
        |  |  -> [hometown]: "bratislava"
        |  |  -> [bio]
        |  |  |  -> [funFact]: "I like fishing."
        |  -> [arr]: "0,1,2,3,4,5"

*/


// 2. 
//      var o = Object.create(null); 
//      o.own = "own";
//      console.log(o) // => { own: "own" } 


// 3.   console.log(obj.hash('person.history.bio.funFact')) // => "I like fishing."
//      console.log(obj.hash('person.history.biographia')) // => "undefined"


// 4.   send(_config)
/* 
*       _config = { method: "GET", data: { message: "config data" } }
*       _default = { url: mandatory("No URL!"), method: "POST", data: { } }
*
*       default(_config, _default) => Uncaught Error: No URL!
*
*
*       _config = { url: "https://url.domain", data: { message: "config data" } }
*       _default = { url: mandatory("No URL!"), method: "POST", data: { } }
*
*       default(_config, _default) => { url: "https://url.domain", method: "POST", data: { message: "config data" } }
*/


// 5.   console.log(Object.mix( {a: false, b: null}, {a: true, b: 2, c: 3} )) // => { a: false, b: null, c: 3 }
//      console.log(Object.mix( {a: 1, b: 2}, {c: 3}, {d: 4} )) // => { a: 1, b: 2, c: 3, d: 4 }


// 6.
/*
        let func = function () { return this.prop; };

        let obj1 = { prop: 1 };
        let obj2 = { prop: 2 };
        let obj3 = { prop: 3 };

        func = func.bind(obj1);
        console.log(func());    // => 1

        func = func.bind(obj2);
        console.log(func());    // => 2

        func = func.bind(obj3);
        console.log(func());    // => 3
*/
