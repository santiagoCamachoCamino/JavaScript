const user = { id:1};

user.name = 'Nicolas';
user.guardar = function (){
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);
//id:1

const user1 = Object.freeze({id:1});
/**
 * Con object freeze nos permite que no se cambien las propiedades y sus valoes
 * , ya sea quitando o agregando
 */
user1.name='Nico';
user1.id = 2;
console.log(user1); //{id:1}

const user2 = Object.seal({id:1});
/**
 * Con object seal, las propiedades se enceuntran fijas, sin embargo, los valores 
 * si se pueden cambiar
 */
user2.name='Nico';
user2.id = 2;
console.log(user1); //{id:2}