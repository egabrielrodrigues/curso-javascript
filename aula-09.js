// Chamadas de função antes da declaração
// Em JavaScript, funções declaradas com 'function' podem ser chamadas antes da declaração
soma(5, 5);
subtracao(5, 5);
multiplicacao(5, 5);
divisao(5, 5);

// Declaração da função 'soma'
// num1 e num2 são parâmetros da função
function soma(num1, num2) {
  console.log("SOMA = ", num1 + num2); // Mostra a soma dos dois números
}

// Declaração da função 'subtracao'
function subtracao(num1, num2) {
  console.log("SUBTRAÇÃO = ", num1 - num2); // Mostra a subtração
}

// Declaração da função 'multiplicacao'
function multiplicacao(num1, num2) {
  console.log("MULTIPLICAÇÃO = ", num1 * num2); // Mostra a multiplicação
}

// Declaração da função 'divisao'
function divisao(num1, num2) {
  console.log("DIVISÃO = ", num1 / num2); // Mostra a divisão
}
