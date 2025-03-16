/**
 * El Polimorfismo es cuando muchios objetos se crearon apartir de propiedades y funciones 
 * constructoras distintas todas comparten el mismo método
 * 
 */

function Select(){};

Select.prototype.render = function(){
    console.log('Renderizando select...')
}

function CheckBox(){};

CheckBox.prototype.render = function(){
    console.log('Renderizando checkbox...')
}

let componentes = [
    new Select(),
    new CheckBox(),
]


componentes.forEach(c => c.render());
/**
 * Aquí el polimorfismo se ve cuando estamos llamando
 * al método render, como se llaman igual,pues permite llamarlo
 * sin la necesidad de verificar si es select o checkbox
 */