//short-circuit

// valores que devuelve FALSO
//false
//0
//""
//null
//undefined
//NaN

//Todos estos valores se lo conocen como falsyç

// let nombre = '';
// let unsername = nombre || 'Anonimo'; //Anonimo
/*
Devuelve anonimo porque nombre en este caso sería falsy(""), ya que esta vacía
y 'or' devuelve el primero en evaluar en true, en este caso anonimo
*/

let nombre = 'Chanchito Feliz';
let unsername = nombre || 'Anonimo'; //Chanchito Feliz

/*
Devuelve 'chanchito feliz' porque es el primero en evaluar en True
*/

console.log(unsername);

function fn1(){
    console.log('soy funcion 1')
    return false;
}

function fn2(){
    console.log('soy funcion 2')
    return true;
}


let x = fn1() && fn2(); //Devuelve función 1

console.log(x);
/*
Porque se llama primero a 'fn1' y esta al devolver false, ocurre un short-circuit
por lo que no se llama a la 'fn2', solo ejecutando función 1 y x con un valor de
false
*/

/**
 * Un ejemplo de aplicacion de esto sería si necesitamos escribir una lógica, pero
 * necesitamos que una lógica anterior haya devuelto 'true', podemos utilizar el 
 * operador &&
 */