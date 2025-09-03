const quantidade = 10;
let soma = 0;

for (let i = 0; i <= quantidade; i++) {
  console.log(`o valor de I é ${i}`);
  soma = soma + i;
}

console.log(`À soma dos numeros deu ${soma}`);

// // Declara uma constante 'quantidade' com valor 10
// const quantidade = 10;

// // Declara uma variável 'soma' iniciando em 0
// // Ela será usada para acumular a soma dos números
// let soma = 0;

// // Estrutura de repetição 'for'
// // let i = 0       → inicializa o contador i em 0
// // i <= quantidade → condição de parada: enquanto i <= 10
// // i++            → incrementa i em 1 a cada iteração
// for (let i = 0; i <= quantidade; i++) {
//     // Exibe o valor atual de i a cada iteração
//     console.log(`O valor de i é ${i}`);

//     // Acumula o valor de i na variável soma
//     // Equivalente a: soma = soma + i
//     soma = soma + i;
// }

// // Exibe o valor total acumulado na variável soma
// console.log(`A soma dos números deu ${soma}`);
