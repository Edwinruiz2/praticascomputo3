/*process.argv.forEach((index, value) => {
    console.log(`${index}: ${value}`);
});

const colors = ['Blue', 'Yellow', 'Red','Green'];
console.table(colors);

const fruits = {apple: 15, mangoes: 20};
console.table(fruits);


const name = () => console.log("Iveth");

const duration = () => {
    console.time('name()');

    //Medir el tiempo que lleva en ejecutarse.
    name();
    console.timeEnd('name()');
}
duration();

const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

name.question("¿Cuál es su nombre? ", name => {
    console.log(`Bienvenido ${name}`);
});
*/

//const operation = require('./functions.js');

/*const {calcular_edad}=require('./functions.js')

const edad = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

edad.question("¿Cuál es su edad? ", edad => {
    calcular_edad(edad)
});
*/
const {comidas} = require('./ejercicio3.js');
const {operacion1}=require('./ejercicio2.js')

const operacion = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

operacion.question("¿Que operacion necesita realizar? \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. División      ", operacion => {
    operacion1(operacion)
   
});



/*pets.forEach((pet)=>{
    console.log(pet);
});*/