function Punto(x, y){
    this.x=x;
    this.y=y;
    this.dibujar = function(){console.log('Dibujando...')}//metodo
}

// const Point = new Function('x', 'y', `this.x=x;
//     this.y=y;
//     this.dibujar = function(){console.log('Dibujando...')}`
// );No se debe utilizar

// const p = new Point(1, 2);
// console.log(p);


/**
 * Metodo Call que tienen las funciones
 */
let punto = { z:7};
Punto.call(punto,1 , 2);//El primer argumento es el contexto de This
//que es para aumentar los objetos que le estamos pasando

console.log(punto);
//{z:7, x:1 , y:2, dibujar:}

/**
 * Meotod de apply
 * Hace lo mismo que call, con la diferecnia que los
 * argumentos lo tenemos que pasar en un array
 */

Punto.apply(punto, [1,2]);
//{z:7, x:1 , y:2, dibujar:}
