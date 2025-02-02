/**
 * Todo lo que se encuentra escrito con this es público
 */
function Usuario(){
    this.name = 'Nicolas';

    this.log = function(){
        console.log('logging');
    }

    this.guardar = function(){
        this.log;
        console.log('guardando');
    }
}

const usuario = new Usuario();
//aqui sobreescribimos la función y nos mostrara lala
usuario.log = function(){
    console.log('la la');
}

/**
 * si llamamos a guardar, nque contiene un 'this.log'
 * se mostrara la la, debido a que se sobrescribio esa funcion
 */
usuario.guardar();
// la la
// guardando

/**
 * Para evitar que esto suceda, creamos variables dentro del
 * objeto
 */

function Usuario2(){

    let id = 1;
    this.name = 'Nicolas';

    let log = function(){
        console.log('logging');
    }

    this.guardar = function(){
        log();
        console.log('guardando');
    }
}


const usuario2 = new Usuario2();
usuario2.guardar();
//logging
//guardandoi