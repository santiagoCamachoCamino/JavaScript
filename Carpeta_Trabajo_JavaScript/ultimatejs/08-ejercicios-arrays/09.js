const usuarios=[
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'premium'},
    {edad:25,nombre:'Felipe',plan:'gold'},
    {edad:32,nombre:'Fernanda',plan:'free'},
]
const users=[
    {age:22,name:'Nica',membership:'premium'},
    {age:27,name:'Chanchita',membership:'free'},
    {age:29,name:'Felipa',membership:'gold'},
    {age:50,name:'Fernando',membership:'free'},
]

//Unificar las estructuras de usuarios y user
const usuariosUnificados = users.map( u =>({
    edad:u.age,  
    nombre:u.name,
    plan:u.membership,
}))
console.log(usuariosUnificados);
//fusionar los arrays

const usuariosFusionados=usuarios.concat(usuariosUnificados);

console.log(usuariosFusionados);
//ordenar por edad

usuariosFusionados.sort((a,b)=>{
   
    if(b.edad > a.edad){
        return -1;
    }
    if(b.edad < a.edad){
        return 1;
    }
    return 0;
})

console.log(usuariosFusionados);
//crear plantilla html

const lista = usuariosFusionados.map(u=> `
    <li>Nombre:${u.nombre}, Edad:${u.edad}</li>
    `);

const html=`
<ul>
    ${lista.join(`
    `)}
</ul>
`

console.log(html);