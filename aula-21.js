// Importa o setTimeout do módulo timers/promises (Node.js)
const { setTimeout } = require("node:timers/promises");

// Função test1
const test1 = (callback) => {
    setTimeout(() => {
        console.log('test1'); // executa depois de 200ms
    }, 200)
}

// Função test2 — recebe um callback
const test2 = (callback) => {
    setTimeout(() => {
        console.log('test2');
        callback(); // chama a função passada como argumento
    }, 600)
}

// Função test3
const test3 = (callback) => {
    setTimeout(() => {
        console.log('test3');
    }, 300)
}

// Função test4
const test4 = (callback) => {
    setTimeout(() => {
        console.log('test4');
    }, 1)
}

// Callback que será usado em test2
const funcaoCallback = () => {
    console.log("SALVOU O USUARIO!");
}

// Execução
test1(); // imprime "test1" depois de 200ms
console.log(1 + 1); // imprime 2 imediatamente

test2(funcaoCallback); // imprime "test2" após 600ms e depois chama "SALVOU O USUARIO!"
test3(); // imprime "test3" após 300ms

console.log(2 + 2); // imprime 4 imediatamente
test4(); // imprime "test4" quase instantaneamente (1ms)
