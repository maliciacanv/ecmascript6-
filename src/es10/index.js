let array = [1, 2, 3[1, 2, 3[1, 2, 3]]];
console.log(array.flat(2)) // se pasa un valor de profundidad de la cual se desea trabajar

let array = [1, 2, 3, 4, 5]
console.log(array.flatMap(val => [val, val * 2]))


// eliminar espacion en blanco

let hello = '                 hello world';
console.log(hello)
console.log(hello.trimStart());


// eliminar los espacios al final del texto

let hello = 'hello world                 ';
console.log(hello, trimEnd());

// pasar de form aopcional el parametro de eror en el catch
try {

} catch {
    error
}

// transformal clave valor en objetos
let entries = [
    ["name", 'mali'],
    ['age', '32']
]
console.log(Object.fromEntries(entries));

// objeto typo symbolo
let mysymbol = `my symbol`;

let symbol = Symbol(mysymbol);
console.log(symbol.description)