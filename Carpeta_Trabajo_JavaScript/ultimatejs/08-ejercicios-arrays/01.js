function paraAbsoluto(arr){
    // let numAbsoluto=[];
    // for( let num of arr){
    //     numAbsoluto.push(Math.abs(num));
    // }
    // return numAbsoluto;
    /*Ejercicio Corregido*/
     return arr.map(num => Math.abs(num));
    /*
    Usamos Map, para devolver un nuevo array, donde aplicamos una función
    para cambiar al arreglo original
    */

}

const ns=[-2,3,5,-15];
const absoluto = paraAbsoluto(ns);
console.log(absoluto);