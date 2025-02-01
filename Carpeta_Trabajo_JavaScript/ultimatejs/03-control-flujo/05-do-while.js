// cuales son los numeros pares

let i = 2;
while (i < 2){ // se evalua primero la condicion
    if( i % 2 == 0){
        console.log('nÚmero par',i);
    }
    i++;
}


do{
    if( i % 2 == 0){// se ejecuta el codigo
        console.log('nÚmero par',i);
    }
    i++;
} while (i < 2) //luego evalua 

console.log('Fuera del while')