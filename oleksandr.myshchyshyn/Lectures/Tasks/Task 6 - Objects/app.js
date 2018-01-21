let obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

/**
 * Task 1: Create a function that traverses all nodes of an object tree. 
 * Output should be formatted
 */

const traverse = (obj) => {
    console.log('[Object]');
    printKeys(obj);

    function printKeys(obj, tabs = []) {
        const keys = Object.keys(obj);

        keys.forEach((key, i) => {
            const value = obj[key];
            if (typeof value === 'object') {
                printLine(key, '');
                const tab = keys[i + 1] ? '|' : '';
                printKeys(value, [...tabs, tab]);
            } else {
                printLine(key, value);
            }
        });

        function printLine(key, value) {
            const space = '   ';
            const startTabulation = '     ';
            const tabulation = startTabulation + (tabs.length ? tabs.join(space) + space : '');
            const formatedValue = value && value.length ? '"' + value + '"' : value;
            console.log(tabulation + "-> [" + key + "]: " + formatedValue);
        }
    }
}

traverse(obj);

/**
 * Task 2: Implementation Object.create
 */

Object.newCreate = (() => {
    function F() {}
    return (parent) => {
        F.prototype = parent;
        return new F();
    };
})();

let newObj = Object.newCreate(obj);


/**
 * Task 3: You are given a complex object that has many deeply nested variables.
 * You don't want to go the usual if obj.property == null route.
 * Create a prototype method that given a nested path, either return the value or undefined.
 * @param {*name of key} prop 
 */

Object.prototype.hash = function(prop) {
    const obj = this;
    return prop.split('.').reduce((key, keyProp) => {
        return key && typeof key == 'object' ? key[keyProp] : undefined;
    }, obj);
}

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined

/**
 * Task 4: Default configuration
 */

/**
 * Function for  throw err if the property doesn't exist.
 */
const mandatory = (err) => {
    return new Error(err);
}

/**
 * function which creates a new object with obj's properties, 
 * falling back on the properties of def when they aren't in obj.
 * @param {* config} obj 
 * @param {* defaults parameter} def 
 */

const defaults = (obj, def) => {
    let configObject = Object.assign({}, obj);
    for (let key in def) {
        if (!configObject.hasOwnProperty(key)) {
            if (def[key] instanceof Error) {
                throw def[key];
            } else {
                configObject[key] = def[key];
            }
        }
    }
    return configObject;
}

/**
 * Task 5: Make a function that returns a new object, containing all of the properties of any objects passed in as
 * parameters.The returned object should include the first instance of each property seen on any parameter object,
 * and any other instance of that property should be ignored. 
 * Also, if any parameter is not an object, it should be ignored.
 * @param {*...arg} arguments
 */

const mix = (...args) => {
    if (typeof args !== "object") {
        new TypeError("The arguments must be objects");
    }
    let obj = {},
        i, len;
    for (i = 0, len = args.length; i < len; i++) {
        for (let key in args[i]) {
            if (args[i].hasOwnProperty(key) && !obj.hasOwnProperty(key)) {
                obj[key] = args[i][key];
            }
        }
    }
    return obj;
}

mix({ a: 1, b: 2 }, { c: 3 }); // {a: 1, b: 2, c: 3}
mix({ a: 1, b: 2 }, { c: 3 }, { d: 4 }); //  {a: 1, b: 2, c: 3, d: 4}
mix({ a: 1, b: 2 }, { a: 3, c: 3 }); // {a: 1, b: 2, c: 3}
mix({ a: false, b: null }, { a: true, b: 2, c: 3 }); //  {a: false, b: null, c: 3}

/**
 * Task 6: Implement bind function. 
 * New implementation allow you to rebind context multiple times.
 * @param {*arguments} context 
 */

Function.prototype.myBind = function(context) {
    let f,
        args = Array.prototype.slice.call(arguments, 1),
        func = () => {
            return f.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };

    if (typeof this.instance === 'function') {
        f = this.instance;
    } else {
        f = this;
        func.instance = f;
    }

    return func;
}

let func = function() { return this.prop; };
let obj1 = { prop: 1 };
let obj2 = { prop: 2 };

func = func.myBind(obj1);
console.log(func()); // => 1

func = func.myBind(obj2);
console.log(func()); // => 2