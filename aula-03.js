// Cria uma constante 'idade' com valor 17
const idade = 17;

// Cria uma variável 'nome' com valor "Gabriel"
let nome = "Gabriel";

// Cria uma variável 'poodeEntrar' (booleano) com valor inicial falso
let poodeEntrar = false;

// Estrutura condicional: verifica se a idade é maior ou igual a 18
// OU (||) se o nome é exatamente "Gabriel"
if (idade >= 18 || nome === "Gabriel") {
  // Se a condição for verdadeira, define poodeEntrar como true
  poodeEntrar = true;
  console.log("Entrou"); // Mostra "Entrou" no console
} else {
  // Se nenhuma condição for atendida
  console.log("Não Entrou"); // Mostra "Não Entrou"
}

// Exibe no console se o usuário pode entrar (true ou false)
// Usando template string para interpolar a variável
console.log(`Usuario pode entrar: ${poodeEntrar}`);

// =   → operador de atribuição
// ==  → comparação de valores (não compara tipo)
// === → comparação estrita (compara valor e tipo)
// ||  → operador lógico "OU"
// &&  → operador lógico "E"
