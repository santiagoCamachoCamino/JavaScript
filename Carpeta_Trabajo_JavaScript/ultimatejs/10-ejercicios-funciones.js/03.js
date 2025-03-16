function callback(fn, ...rest){
    return fn(...rest);
}

function log(...args){
    console.log(args);
}

callback(log, 1,2,3,4);

/**
 * Otra forma de realizarlo
 */

callback ((...args) => {//integramos la función log
    console.log(args);//con una fat arrow function
},1,2,3,4);