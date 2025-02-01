//{id:1, recuperarClave:function(){} }
function Usuario(){ //se debe usar UpperCamelCase/PascalCase
    this.id= 1;
    this.recuperarClave = function (){ // esto sería un metodo
        console.log('Recuperando clave...');
    }
}

let usuario = new Usuario();
console.log(usuario); 
//usuario {id:1, recuperarClave}