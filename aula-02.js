// Declara uma constante chamada numero1 e atribui o valor 1
// O valor de uma constante (const) não pode ser reatribuído
const numero1 = 1;

// Declara uma variável chamada numero2 e atribui o valor 2
// Como foi usada a palavra-chave 'let', o valor pode ser alterado depois
let numero2 = 2;

// Estrutura condicional 'if' (se)
// Verifica se numero1 é estritamente igual (===) a 1
// O operador '===' compara valor e tipo de dado
if (numero1 === 1) {
  // Se a condição for verdadeira, o valor de numero2 é alterado para 6
  numero2 = 6;
}

// Exibe o valor atual de numero2 no console
// Se a condição acima foi verdadeira, mostrará 6
console.log(numero2);
