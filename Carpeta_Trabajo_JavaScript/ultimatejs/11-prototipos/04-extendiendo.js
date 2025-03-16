/**
 * Extender el prototipo de la función constructura Object
 */
Object.prototype.isEqual = function(obj){

};

/**
 * El problema esta en no extender los prototipos de Object, Arrays
 * ,Number , etc. Debido a que estos ya estan preestablecidos, así 
 * mismo si llegasemos a implementar librerias, estas pueden sobreescribir 
 * estos mismo prototipos que hayas extendido. Por lo que no se puede
 * extender prototipos de funciones construturas quie ya tienen JavaScript
 */

let x={};
x.isEqual({a:1});