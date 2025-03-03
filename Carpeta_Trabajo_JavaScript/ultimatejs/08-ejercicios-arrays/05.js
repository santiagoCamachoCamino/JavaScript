const usuarios=[
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'premium'},
    {edad:32,nombre:'Fernanda',plan:'free'},
    {edad:25,nombre:'Felipe',plan:'gold'},
];

// function obtenerMayor(usr){
//     let usuarioMayor;
//     let mayor = usr[0].edad;
//     console.log(mayor);
//    for( let u of usr){
//     console.log(u.edad)
//     if(u.edad > mayor){
//         mayor = u.edad
//         usuarioMayor=u;
//     }
//    }
//    return usuarioMayor;

// /**
//  * Ejercicio Corregido
//  * let mayor = arr[0];
//  * for(let usuario of arr){
//  *  if(mayor.edad < usuario.edad){
//  *      mayor=usuario;
//  *  }
//  * }
//  */
// }


const obtenerMayor= usuarios.reduce((accu, elemento)=>{
    if(accu.edad < elemento.edad){
        accu=elemento;
    }
    return accu;
    
},usuarios[0]);
// const mayor = obtenerMayor(usuarios);
console.log(obtenerMayor);

