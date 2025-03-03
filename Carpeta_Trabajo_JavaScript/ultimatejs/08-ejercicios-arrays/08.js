const usuarios=[
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'free'},
    {edad:25,nombre:'Felipe',plan:'gold'},
    {edad:32,nombre:'Fernanda',plan:'free'},
]
//Obtener los usuarios pago
function usuariosPago(usrs){
    return usrs.filter(u => u.plan !== 'free');

}

//Ordenar de mayor a menor edad
function ordenados(usrs){
    return usrs.sort((usr1, usr2)=>{
        if(usr1.edad < usr2.edad) return -1;
        if(usr1.edad > usr2.edad) return 1;
        return 0;
    })
}


//Devolver el nombre del usuario
function nombreUsuarios(usrs){
    return usrs.map(u=> u.nombre);
}

//Plantilla HTML

const usuario = nombreUsuarios(usuarios);

const lista = (usuario) => {
    for
}

//Imprimir en consola
