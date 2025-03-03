//Declaración de funciones: Function Declaration

//Se las conoce como Función Nombrada -> Named Function
function suma(){
    console.log('sumando')
}

//Función Anonima -> Anonymous function
// function (){
//     console.log('función anonima')
// } da error, porque las funcionesd deben ser nombradas


//Expresión de funciones -> function expression
/**
 * Lo que estamos haciendo, tomamos una función anonmimo y se la estamos
 * asignando a una variable
 */
let resta = function(){ //Anonymus function expression
    console.log('restando')
}

let multiplica = function multi (){ //Named function expression
    console.log('multi')
}



const divide = () =>{ //siempre sera anónima
    console.log('dividiendo')
}