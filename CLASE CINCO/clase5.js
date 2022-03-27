/*El método console.log() se usa para imprimir en consola mensajes */

console.log("Hi there!");
// Imprime: Hi there!

/*Strings: Son un tipo de dato primario.  Son cualquier cualquier agrupación de
caracteres(letras, espacios, números, símbolos) encerrados en comillas simples 
o comillas dobles */

let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";

// Números: Son un tipo de dato primario. Incluye los enteros y flotantes

let amount = 6;
let price = 4.99;

//Buleanos: Tipo de dato primario, pueden ser falso o verdadero

let lateToWork = true;
let isHoliday = false;

//nulos: Tipo de dato primario.  Representan la ausencia de un valor

let x = null;

// Operaciones aritmeticas

// Addition
5 + 5;
// Subtraction
10 - 5;
// Multiplication
5 * 10;
// Division
10 / 5;
// Modulo
10 % 5;

//String.length: es una propiedad que devuelve el número de caracteres
// que conforma un string

let message = "good nite";
console.log(message.length);
// Imprime: 9
console.log("howdy".length);
// Imprime: 5

/*Métodos: Retornan información de un objeto.  Son llamados al colocar  .nombremétodo() */

/*Librerias: Contienen métodos que se pueden llamar asi: nombrelibreria.nombremétodo() */
// Returns a number between 0 and 1
Math.random();//Libreria Math; método random


/*Comentarios multilínea:
La siguiente URL se debe cambiar antes de despliegue
*/
let baseUrl = "https://google.com/";

//Variables

let name = "Tammy";
const found = false;
var age = 3;
console.log(name, found, age);
//Imprime Tammy, false, 3


/*La palabra clave const:
    Una variable constante se puede declarar con la palabra const.  Debe asignarse un valor
    Cualquier de reasignar una variable tipo const resultará en un error.

    Este tipo de variable no se puede reasignar.
*/

const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError: Assignment to constant variable.
