const usuarios=[
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'premium'},
    {edad:25,nombre:'Felipe',plan:'gold'},
    {edad:32,nombre:'Fernanda',plan:'free'},
]
//Obtener los usuarios pago
const usuariosPago = (usrs) => {
    return usrs.filter(u => u.plan !== 'free');

}
console.log(usuariosPago(usuarios));

//Ordenar de mayor a menor edad
const ordenados= (usrs) =>{
    return usrs.sort((usr1, usr2)=>{
        if(usr1.edad < usr2.edad) return -1;
        if(usr1.edad > usr2.edad) return 1;
        return 0;
    })
}

console.log(ordenados(usuariosPago(usuarios)));

//Devolver el nombre del usuario
const nombreUsuarios = usuariosPago(usuarios).map(u => `<li>${u.nombre}</li>`);

// console.log(nombreUsuarios(usuariosPago(usuarios)));

// //Plantilla HTML
// const html = `<ol>${nombreUsuarios.join('')}</ol>`;



// //Imprimir en consola


/**
 * Ejercicio Corregido
 * lo primero que hacemos es guardar es una variables todos los usuarios pagos,
 * para despues al usar el metodo sort que me guarda y me modifica mi array, lo ordena.
 * El metodo map lo usamos para construir la lista, y despues usaqr join, para agregar un espacio
 */

const pagos = usuarios.filter(u=>u.plan !== 'free');

pagos.sort((a, b) =>{
    if(a.edad < b.edad){
        return 1;
    }
    if(a.edad > b.edad){
        return -1;
    }
    return 0;
})

const lista = pagos.map(u=>`<li>${u.nombre}</li>`);
console.log(lista);
const html = `
<ul>
    ${lista.join(`
        `)}
</ul>
`

console.log(html)
