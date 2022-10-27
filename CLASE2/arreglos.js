const unArray = []; /* creación de un array vacío */
const unArray1 = new Array(); /* Creación de un nuevo array mediante "new" */
const gurus = ['Jobs', 'Ellison']; /* Creación de un array con elementos */ 

/* Todos los elementos de un array están indexados y podemos utilizar el índice asociado a cada elemento para obtenerlo. Por ejemplo, en el array creado antes, podemos obtener el valor del primer elemento de este, accediendo al elemento cero de la estructura (recordemos que el cero se refiere al primer elemento): */

console.log(gurus[0]); /* devuelve 'Jobs' */

/* Los arrays pueden contener cualquier tipo de datos en su interior, incluso otros arrays, lo que daría lugar a arrays multidimensionales o matrices. Sin embargo, aquellas variables declaradas con const no podrían ver modificado su valor. Entonces, ¿por qué hemos podido añadir un nuevo elemento al array, modificándolo?

La razón es muy sencilla. No hemos modificado la referencia de memoria a la que la variable está apuntando, sino que hemos modificado el contenido de memoria asociado a dicha referencia. No es, por tanto, posible redefinir la referencia a la que la variable apunta, como podemos ver en este ejemplo: */

unArray[0] = 'Correcto'; /* Manera correcta de de modificar el contenido de un objeto */
console.log(unArray);
