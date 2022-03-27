/**
 * Funciones de Flecha
 */

 //Arrow function with two arguments
 const sum = (firstParam, secondParam) => {
   return firstParam + secondParam;
 };
 console.log(sum(2, 5)); // Prints: 7

 // Arrow function with no arguments
const printHello = () => {
    console.log("hello");
  };
  printHello(); // Prints: hello
  
// Arrow functions with a single argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
  };
  checkWeight(25); // Prints: Baggage weight : 25 kilograms.
  
  // Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60
let a = 10;
let bob = a => a + 100;
console.log(bob);


/*Splice
    Se usa para insertar o eliminar datos de un array.
    array.splice(start,deleteCount,item1,item2)
    con 0 como origen.
*/
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
//Insertar en la posición 1, borrando cero datos, el dato 'Diciembre'
meses.splice(1,0,'Diciembre','Junio','Julio');
//console.log(meses);

//Si queremos contar desde el final de array el sitio donde eliminaremos o insertaremos
//meses.splice(-1,0,'Diciembre','Junio','Julio');

meses.splice(1,3);
//console.log(meses);


/*Filter
    var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
    callback: Función que comprueba cada elemento del array para ver si cumple 
              la condición (también llamada predicado).  Retorna true si el elemento 
              la cumple o en caso contrario retornará false. Acepta tres parámetros:
            currentValue: El elemento actual del array que está siendo procesado.
            index: (Opcional) El índice del elemento actual del array que está siendo 
            procesado.
            array (Opcional): El array sobre el que se ha llamado filter.
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(palabra => palabra.length > 7);
console.log(result);

function esMayorQueNueve(elemento){
    return elemento>=10;
}


const filtrados = [12, 5, 8, 130, 44].filter(esMayorQueNueve);
console.log(filtrados);