const obj = {
    name: 'mali',
    age: 25,
    country: 'cs'
}

let { name, ...all } = obj; // operador de reposo par asepara los elementos 
console.log(name, all);

// propiedades de propagacion para unir a un objeto

const obj = {
    name: 'mali',
    age: 25
}

const obj1 = {
    ...obj,
    country: 'pe'
}

console.log(obj1)

// promise finally

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        resolve('hello'): reject(new Error('erro'))
    });
}

helloword()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))

// regex
const regexData = /([0-9]{4}-([0-9]{2})-([0-9]{2}))/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day)