function saludar(){
    console.log("Hola, soy un programa en JavaScript");
};
/*
Cuando nosotros hacemos uso de la palabra reservada function, lo que
nosotros le indicamos a la derecha será el nombre de la función.
*/ 

saludar();

function suma(){
    return 2+2;
    //Return nos permite reutilizar código que se encuentre dentro
    //de las funciones
};

let resultado = suma();
console.log(resultado);
console.log(suma())