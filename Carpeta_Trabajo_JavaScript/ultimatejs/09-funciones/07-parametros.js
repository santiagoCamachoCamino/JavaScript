/**
 * {
 *  url: ...
 *  bucket: amazon S3 //donde quiero almacenar los archivos de mi app
 *  port:80
 * }
 */

function configurarAPI(url){
    /**
     * Esta es una forma de recibir valores por parametros por defecto
     * es como se realizaba antes
     */
    const defaultURL = url || 'https://holamundo.io';
    return `${defaultURL}`

}


/**
 * Sin embargo hay una nueva forma, donde podemos asignarle un valor
 * por defecto dentro de los parametros, sin embargo, cuanndo 
 * le asignamos un valor por defecto, debemos hacerlo con los parametros
 * restantes, debido a que si tenmos asignado un valor por defecto, en medio
 * y luego le pasamos a la función solo dos argumentoa, el ultimo parametro sera 
 * undefined.
 * 
 * 
 * Y si queremos cambiar el por defecto le pasamos todos los arguemtos
 */

function configurarAPI2(url, bucket=145, port=80 ){
    return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI2('https://holamundo.io'))
/**
 * Pero cuando se trabaja con objetos, hay una forma de obtener 
 * los parametros qeu deseeasemos
 */
const config={
    url: 'https://holamundo.io'
}
/**
 * 
 * Para obtener la URL del objeto, tenemos que hacer un
 * Object Distrocturing
 */
function configurarAPI3({url}){//lo que le estamos diciendo aca es que va 
    return `${url}`;//recibir un objeto y quie de ese objeto va obtener url
}
// console.log(configurarAPI())
console.log(configurarAPI3(config))
/**
 * Pero cuando no se le asigna ningun armento a la función, no hay nada
 * establecido por defecto, por lo que debemos hacer es indicarle una forma
 * que debe de tener por defecto
 */

function configurarAPI4({url} = {url: 'por defecto'}){
    return `${url}`;
}
console.log(configurarAPI4())