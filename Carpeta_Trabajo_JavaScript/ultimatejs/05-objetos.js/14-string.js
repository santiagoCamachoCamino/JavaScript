const saludo = "Hola Mundo!";
//              012345
const despedida = new String("Chao mundo:(");

console.log(typeof saludo); //String
console.log(typeof despedida); //Object

/**
 * JavaScript toma los strings y los envuelve en un objeto
 * para hacer el llamado de sus propiedades y metodo, para luego 
 * devolvernos el valor original
 */

//Propiedades y metodos de String
console.log(
    saludo.length,//devuelve el largo de un objeto 11
    saludo.indexOf('Mu'), //5
    //Index of nos permite obtener el indice de donde se encuentra un
    //caracter, devuelve '-1' si mo eneucntra el caracter
    saludo.includes(" Mundo"),//true 
    //Devuelve true o false, si existe un caracter dentro del Striing
    saludo.replace("Mundo", "Nicolas", saludo), // Hola Nicolas Hola Mundo
    //Replace nos permite cambiar nuestro string, sin embargo debemos guardar
    //en una nueva variable
    saludo.toLowerCase(),//convierte todo el texto en minuscula
    saludo.toUpperCase(),//convierte todo el texto en mayuscula
    saludo.substring(0, 4),//Hola
    //funciona con indices, 1er arg indice de inico, 2do arg indice final el cual no
    //incluye el caracter final, devuelve un extracto del String

    saludo.substr(2, 4)//la M deprecado
    //este metodo trabaja con la longitud, 1er arg indice de donde queremos empezar
    //2do arg el número de caracteres
)
let neuvoSaludo = saludo.replace("Mundo", "Nicolas");

const espacios = "      hOLA   mUNDO      ";
console.log(
    espacios.trim(),//quita los espacios del inicio y final
    espacios.trimStart(),//quita espacios inicio
    espacios.trimEnd()//quita espacios del final
)