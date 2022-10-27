/* Para definir una función:  */

let unaFuncion = function test(){
    /* Intrucciones a cumplir con estos parámetros */
};

/* Estrictamente hablando, lo que ha ocurrido es que hemos asignado una función anónima (sin nombre) a una variable. No hay problema en darle un nombre a la función, pero no tiene ninguna utilidad especial: */

unaFuncion1 = function nombre(){
    /* Instrucciones... */
};

let funcionSaluda = function(){console.log("Hola!")};
console.log(funcionSaluda());

/* empleando el 'return' de las funciones */

function saluda(){
    return 'HOLA!'
}

const hola = saluda();

console.log(saluda())