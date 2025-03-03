//Las fat arrow functions no tiene ARGUMENTS
//nio tiene SUPER THIS
/**
 * 
 * las fat arrow function son una version reducida de la funciones normales
 * solo debemos utilizarla para realizar calculos
 */
const suma = (a,b) => {
    return Array.from(arguments).reduce((acc,el)=>acc+el);
}

console.log(suma(1,2,3,4));