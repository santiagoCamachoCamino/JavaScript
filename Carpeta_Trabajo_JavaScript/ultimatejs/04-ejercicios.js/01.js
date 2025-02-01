function cualEsMayor(a, b){
    let mayor=0;
    if(a < b){
        mayor=b
    }else{
        mayor=a;
    }
    return mayor;

    //Otra forma operador ternario
    //return (a > b)? a : b;
}

let mayor = cualEsMayor(5, 10);

console.log(mayor)