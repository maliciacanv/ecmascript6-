// object. entries devuelve la clave y valor de una matriz

const data = {
    frontend: 'mali',
    backend: 'isa',
    design: 'ana'
}

const entries = Object.entries(data); // devuelve una [[]]
console.log(entries);

const data = {
    frontend: 'mali',
    backend: 'isa',
    design: 'ana'
}

const values = Object.values(data) // devuelve un arreglo de string
console.log(values);

const string = 'hello';

console.log(string.padStart(7, 'hi'));
console.log(string, padEnd(12, '----------'));

const obj = {
    name: 'mali',
}

// async await
const helloword = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('hellow world'), 3000): reject(new Error('test error'))
    })
}

const hellowAsync = async() => {
    const hello = await helloword();
    console.log(hello);
}

hellowAsync();

// para manejar los errores
const anotherFunction = async() => {
    try {
        const hello = await helloword();
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();