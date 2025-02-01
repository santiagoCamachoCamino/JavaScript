let obj = {};
let obj2 = new Object();

/** Otros tipos de constructores
 * new Array(); []
 * new String(); "" '' `` 
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario(){
    this.name = "Chanchito Feliz";
}

let user = new Usuario();
console.log(user.constructor);

//Posibles errores

const s1= "1 + 1";
const s2= new String("1+1");
console.log(s1, s2); // 1+1 String{'1+1'}

console.log(eval(s1),eval(s2));//2 String{'1+1'}

//Usamos el valueOf para ver el valor que contiene el String
console.log(s2.valueOf()) //1+1