const punto = {
    x: 10,
    y: 5,
    dibujar(){
        console.log('Dibujando ... ');
    }
}

//delete punto.dibujar;

if('dibujar' in punto){//instrucción para verificar si existe una propiedad
    //de nombre dibujar dentro del objeto 
    punto.dibujar();
}

//console.log(Object.keys(punto));
//['x','y', 'dibujar']

for(let llave of Object.keys(punto)){//nos lista la propieda con su valor
    console.log(llave, punto[llave]);
}

//otro metodo

for(let entry of Object.entries(punto)){
    console.log(entry);//Nos devuelve en Par o sea los valores dentro de un array
}
//['x', 10]
//['y', 15]
//['dibujar']

for(let llave in punto){//Esta funcionalidad es totalmente nueva
    console.log(llave, punto[llave]);
}