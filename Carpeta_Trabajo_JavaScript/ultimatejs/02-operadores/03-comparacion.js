let a = 10;

//operadores racionales

console.log(a > 5); //true
console.log(a >= 5); //true
console.log(a < 5); //false
console.log(a <= 5); //false


//operadores igualdad

console.log(a == 10);//true
console.log(a != 10);//lo que nos indica es que si 
//'a' es distinto que '10', entonces sería false

console.log(a == '10'); //true
/*
nos da true, porque '==' solo nos pregunta si los valores son iguales, 
pero no nos pregunta si los tipos son iguales.
*/

console.log( a === '10');//false
/*
ahora nos da false porque ahora si compara si son iguales en valor 
y en tipo de dato
*/
console.log( a !== '10'); //false