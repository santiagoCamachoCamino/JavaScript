/**
 * El metodo MAP, se utiliza en el desarrollo de softwares
 * y se usa para crear nuevos arrays a partir de un array 
 * existente
 */

const usuarios=[
    {edad:17, nombre:'Nico'},
    {edad:13, nombre:'Ana'},
    {edad:25, nombre:'María'},
    {edad:32, nombre:'Ñusta'},
];

//const lista = usuarios.map(usuario => usuario.nombre);
//console.log(lista);
//Nos devuelve en un array solo con los valores de cada llave
//['Nico', 'Chanchito', 'Felipe', 'Fernanda']

//Esto lo podemos mezclar con las etiquetas html
const lista = usuarios.map(usuario => `<li>${usuario.nombre}</li>`);
const hmtl = `<ol>${lista.join('')}</ol>`;

console.log(hmtl);
//<ol><li>Nico</li><li>Ana</li><li>María</li><li>Ñusta</li></ol>

const mapped = usuarios.map(usuario =>{
    return{
        ...usuario, //Esto nos indica que devuelve una copia de usuario
        mayor:usuario.edad>17,
    }
})
//No es necesario hacer el return
const mapped2 = usuarios.map(usuario =>({
        ...usuario, //Esto nos indica que devuelve una copia de usuario
        mayor:usuario.edad>17,
    
}));

console.log(mapped);
/* 
{edad: 17, nombre: 'Nico', mayor: false}
{edad: 13, nombre: 'Ana', mayor: false}
{edad: 25, nombre: 'María', mayor: true}
{edad: 32, nombre: 'Ñusta',
*/


/**
 * Se puede encadenar con otros metodos
 */

const lista2 = usuarios
    .filter(usuario =>usuario.edad > 17)
    .map(usuario => `<li>${usuario.nombre}</li>`);
