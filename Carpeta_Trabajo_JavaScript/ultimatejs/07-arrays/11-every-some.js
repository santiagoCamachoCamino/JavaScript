let usuarios = [
    {id:1, activo:true},
    {id:2, activo:false},
    {id:3, activo:false},
];

/**
 * Metodo Every, el cual recibe un predicate, que es una funcion
 * que devuleve true or false.
 * Este metodo se ejecuta hasta que encuentre un valor falso, si encuentra
 * un falso se detiene y devuelve false
 */

let todoActivos=usuarios.every(u =>{
    console.log('todos activos', u.id);
    return u.activo;
})

console.log(todoActivos);
//todos activos 1
//todos activos 2
//false


/**
 * Metodo some, similar al anterios, solo que se ejecuta hasta
 * que encuentre un true, si lo encuentra devuelve true, si no, false
 */
let algunoActivo = usuarios.some(u=>{
    //la 'u' en este caso seria un objeto
    console.log(u);
    console.log(u.id);
    return u.activo;
})

console.log(algunoActivo);
//1
//true