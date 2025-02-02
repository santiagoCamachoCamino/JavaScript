console.log(Math.PI);//3.1415
console.log(Math.abs(-15));//Nos devuelve el valor absoluto 15

console.log(
    Math.round(15.5), //16 Devuelve el valor redondeado
    Math.round(15.4),//15
    Math.floor(15.9),//15 Redondea siempre el número hacia abajo
    Math.ceil(15.0001),//16 redondea siempre hacia arriba
    Math.pow(2, 3),//8 Devuelve la potencia 
    Math.sqrt(9), //3 devuelve la raiz
)

console.log(Math.random());//Devuelve un numero aleatorio entre 0 y 1

function getRandom(min, max){//Para obtener numeros aleatorios entre distintas cantidades
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10))