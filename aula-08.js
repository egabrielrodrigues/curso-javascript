// Declara uma constante 'salario' com valor numérico
const salario = 1545.4;

// toFixed(2) → formata o número com 2 casas decimais
console.log("salario: ", salario.toFixed(2)); // 1545.40

// Declara uma constante 'salario2' como string
const salario2 = "1.20";

// Number() → converte string em número
// toFixed(2) → formata com 2 casas decimais
console.log("salario: ", Number(salario2).toFixed(2)); // 1.20

// Declara uma constante 'salario3' como string
const salario3 = "13004.8";

// Converte a string para número
let salario3convertido = Number(salario3);

// Mostra o valor original (string)
console.log("salario: ", salario3); // "13004.8"

// Formata o número como moeda brasileira
// toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
console.log(
  "convertido: ",
  salario3convertido.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
); // R$ 13.004,80

// Também é possível formatar diretamente números com toLocaleString
console.log(
  salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
); // R$ 1.545,40
