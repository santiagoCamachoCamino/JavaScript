const usuarios=[
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'free'},
    {edad:32,nombre:'Fernanda',plan:'free'},
    {edad:25,nombre:'Felipe',plan:'gold'},
];

function getPaidUsers(usrs){
    return usrs.filter(usuario => usuario.plan !== 'free');
    /**
     * EJERCICIO CORREGIDO
     * con filter podemos acceder a las atributos de estos objetos
     */
}

console.log(getPaidUsers(usuarios));