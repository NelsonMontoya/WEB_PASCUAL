const suma = (a,b) =>{
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código
    return a+b;
}

const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    if (x === y) {
        return true;
      } else {
        return false;
    }
}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    return str1.length === str2.length;
  }

  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if(numero === 0) {
      return false;
    }
    else if(numero > 0) {
      return "Es positivo";
    }
    else {
      return "Es negativo";
    }
  }

  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(color) {
        case "blue":
          return "This is blue";
        case "red": 
          return "This is red";
        case "green":
          return "This is green";
        case "orange":
          return "This is orange";
        default: 
        return "Color not found";
      }
  }

  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if(numero % 15 === 0) return 'fizzbuzz';
    if(numero % 3 === 0) return 'fizz';
    if(numero % 5 === 0) return 'buzz';
    return numero;
  }

  const devolverPrimerElemento = (array) => {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
  }

  const agregarItemAlFinalDelArray = (array, elemento) =>{
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    //array[array.length] = elemento;
    array.push(elemento);
    return array;
  }

  const nuevoUsuario = (nombre, email, password) => {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:

    let usuario = {
        nombre: nombre,
        email: email,
        password: password
      };
    
      return usuario;
  }

  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    return usuario.password === password;
  }

  const actualizarPassword =(usuario, nuevoPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password = nuevoPassword;
    return usuario;
  }

  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    
    usuario.amigos.push(nuevoAmigo);

    return usuario;
  }

  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    usuarios.forEach(element => {
        element.esPremium = true;
    });
    return usuarios;
  }

  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    // let usuario = {
    //   posts: [{
    //     likes: 4
    //   }]
    // };
    const posts = usuario.posts;
    const likes =posts.map(post => post.likes);
    const sum = likes.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    return sum;

  }

  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

class Persona {
    constructor(nombre, apellido, edad, domicilio) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.domicilio = domicilio,
        this.detalle = ()=> {
            return {
                Nombre: this.nombre,
                Apellido: this.apellido,
                Edad: this.edad,
                Domicilio: this.domicilio
            }
        }
    }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    const persona = new Persona(nombre, apellido, edad, dir);
    return persona;
}

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) del array numeros
    // Pasa el resultado a `cb`
    // No es necesario devolver nada

    var sumaTotal = numeros.reduce((numero, currentNumero) => {
        return numero + currentNumero;
      },0);

      cb(sumaTotal);

}

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    
    for(let i = 0; i < array.length; i++) {
      cb(array[i]);
    }
  }

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
    return cb(n1, n2);
  }

  function filter(arreglo){
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición

    const filtrado = arreglo.filter(element =>{
        return element.startsWith('a');
    });
    return filtrado;
  } 

/**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

