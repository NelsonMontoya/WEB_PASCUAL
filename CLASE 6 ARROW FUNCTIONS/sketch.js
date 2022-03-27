const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(palabra => palabra.length > 7);
console.log(result);

function esMayorQueNueve(elemento){
    return elemento>=10;
}

const filtrados = [12, 5, 8, 130, 44].filter(esMayorQueNueve);
console.log(filtrados);


const isEven = (n) => {
    return n % 2 == 0;
  };
  
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even
  number: ${isNumEven}.`);
  };
  
  // Pass in isEven as the callback function
  printMsg(isEven, 4);
  // Prints: The number 4 is an even number: True.

  
  const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = finalParticipants.map((member) => {
  return member + " joined the contest.";
});
console.log(announcements);
