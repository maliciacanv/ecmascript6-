function newFunction(name, age, country) {
    var name = name || 'mali';
    var age = age || 32;
    var country = country || 'mx';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'mali', age = 32, country = 'mx') {
    console.log(name, age, country)
}

newFunction2(); // toma los datos por defecto
newFunction2('ricardo', '23', 'co') // o pasarle sus valores en parametros


// templates literales

let hello = 'hello';
let world = 'world';

let epicPhrase = hello + '' + world;
console.log(epicPhrase);

//es6 para concatenar elementos 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilinea en string

let lorem = "quiero escribir una frase epica lallalallalalala \n" +
    "otra frase epica lallalalala";

// es6 ya no se necesita pones el \n para el salto de linea.
let lorem2 = `otra fase epica q neceistamos 
ahora es otra frase epica ya no necisto eslash n`;

// destructuracion de elementos
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'mx'
}

console.log(person.name, person.age)
    // es6 destructuracion mas amigable entendible 
let { name, age, country } = person;
console.log(name, age);

// operator para unir elementos
let team1 = ['oscar', 'julian', 'ricardo']
let team2 = ['valeria', 'yessica', 'camila']

let education = ['david', ...team1, ...team2] //... operator de propagacion
console.log(education);

// let 
var hola = 'hola ' // disponible de forma global
    // let esta disponible en el scope en bloq de codigo en cual esta llamado

{
    var globalVar = 'global var'
}

{
    let globalLET = 'GLOBAL LET'
    console.log(globalLET)
}

console.log(globalVar);
console.log(globalLET)

// const 

const a = 'b'; // no se puede asignar otro valor a un constante
a = 'a';


// es5
let name = 'mali';
let age = 25;
obj = { name: name, age: age }

// es6
obj2 = { name, age }

// arrow function
const names = [
    { name: 'mali', age: 25 },
    { name: 'val', age: 26 }
]

let listOfNames = names.map(function(item) {
    console.log(item.name)
});

// las arrow function son funciones anonimas

let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age, country) => {
    // codigo
}

const listOfNames4 = name => {
    // codigo
}

const square = num => num * num;

// promise
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('todo bien')
        } else {
            reject('salio mal')
        }
    })
}

helloPromise()
    .then(response => console.log(response)) // exito
    .then(res => console.log('hola')) // tambien se pued eponer para un simple valor

.catch(error => console.log(error)) // error

// clases

class calculator {
    constructor() {
        this.valuea = 0 // asignar valores globales
        this.valueb = 0
    }

    sum(valuea, valueb) {
        this.valuea = valuea;
        this.valueb = valueb;
        return this.valuea + this.valueb;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './modulo';

hello();

// generadores para leer algoritmos 

function* helloWorld() {
    if (true) {
        yield 'hello, '
    }
    if (true) {
        yield 'world'
    }
}

const genertaorHello = helloWorld();
console.log(genertaorHello.next().value);