/*  Los conjuntos fueron introducidos en la versión 6 de JavaScript. Un conjunto o set es una estructura que representa una colección de valores únicos (no se pueden repetir).

Los sets permiten manejar conjuntos de datos y asegurarnos de manera automática que no contiene duplicados. Para crear un set vacío recurrimos a una función constructora y al operador new:*/


const conjunto = new Set();
conjunto.add(10);
conjunto.add(12);
conjunto.add(12);
conjunto.add(20);

/* ¿Qué pasa si intentamos añadir un elemento que ya existe en el set? Si intentamos añadir un elemento que ya estaba presente en el set, la orden es ignorada */

console.log(conjunto);

/* la excepcion a la regla anterior yace en los objetos */

const conjuntoConObjetos = new Set().add([1,2]).add([1,2]);

console.log(conjuntoConObjetos)

/* El método .has(elemento) comprueba si un elemento existe dentro de un set:

 */

console.log(conjunto.has(10))

/* El método .delete(elemento) borra valores de un set. Devuelve true o false según el éxito de la operación.

 */

conjunto.delete(10);

console.log(conjunto);

/* El método .clear() vacía el conjunto completamente y nos devuelve un conjunto vacío: */

conjunto.clear();

console.log(conjunto)