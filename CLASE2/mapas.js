/*Los mapas no son más que listas de parejas clave-valor, donde la clave y el valor pueden ser cualquier tipo de dato. En otros lenguajes de programación, son conocidos también como mapas hash, tablas o diccionarios. En JavaScript, los mapas también son objetos.

Las claves de un mapa deben ser únicas (algo que ocurre también en los sets). No cuentan con una forma literal para su definición, por lo que para crearlos es necesario usar una función constructora.  */

const nobelesFisica = new Map();

/*  Al igual que ocurría con los sets, los mapas tienen distintos métodos que nos permiten trabajar con ellos. Los más importantes son:

Método set (clave, valor), que permite añadir una nueva pareja clave-valor al mapa.
Método get (clave), a partir de la clave, nos devuelve su valor asociado, si existe.
Método has (clave), que devolverá true o false en función de si el mapa contiene alguna pareja con la clave indicada.
Método delete (clave), el cual permitirá borrar una entrada del mapa que tenga la clave especificada.
Método clear (), que permitirá vaciar completamente el mapa.*/

nobelesFisica.set(1921, 'Einstein')
nobelesFisica.set(1901, 'Roentgen')
nobelesFisica.set(1902, 'Zoeman');

console.log(nobelesFisica.get(1902));
console.log(nobelesFisica.has(1905));
console.log(nobelesFisica.delete(1921));
console.log(nobelesFisica.clear());