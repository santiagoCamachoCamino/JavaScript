/**
 * Crear algoritmo que devuelva el precio del producto
 * más impuesto
 */

function precioCompleto(precio, impuesto){
    let iva=(precio*impuesto)/100;
    return precio + iva;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);

//corregido
function precioCompleto(precio, impuesto){
    return precio + precio * impuesto;
}