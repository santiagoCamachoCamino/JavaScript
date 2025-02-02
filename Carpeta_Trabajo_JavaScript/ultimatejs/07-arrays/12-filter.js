/**
 * Metodo de filter, nos permite filtrar arrays, ya sea objetos
 * propiedades y guardarlas en un nuevo array, esta recibira
 * una funcion 
 */

const usuarios=[
    {edad:17, nombre:'Nico'},
    {edad:13, nombre:'Ana'},
    {edad:25, nombre:'María'},
    {edad:32, nombre:'Ñusta'},
];

const mayores = usuarios.filter(usuario => usuario.edad > 17);
const menores = usuarios.filter(usuario => usuario.edad < 18);
console.log(mayores);
//{edad:25, nombre:Maria}
//{edad:32, nombre:Ñusta}

console.log(menores);
//{edad:17, nombre: Nico}
//{edad:13, nombre: Ana}