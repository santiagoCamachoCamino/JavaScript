let punto = {
    x:10,
    y:15,
}

//Para clonar

Object.assign(punto, {z:20});
console.log(punto);
//{x:10, y:15, z:20}
/**
 * Assign nos permite asignar mas propiedades a un objeto
 */

/**
 * Para poder clonarlo
 * Usamos el mismo metodo de assign, pero le pasamos un
 * objeto vacio, como primer argumento, seguido del objeto a copiar
 * object.assign({}, punto);
 */

let clonePunto = Object.assign({}, punto, {z:20, x:1});
console.log(clonePunto, punto);
//{x:1, y:15, z:20} {x:10, z:15}

/**
 * Otra forma de crear copias
 * 
 */

let copia2 = {...punto};//Se lee de la siguiente manera
/**
 * Se crea un objeto literal y que las propiedades de punto se copian
 */
console.log(copia2);
//{x:1, y:15, z:20}

/**
 * Ultima forma de copiar objetos
 * Es una forma antiagua
 */

let copia3 = {};
for(let llave in punto){
    copia3[llave]=punto[llave];
}