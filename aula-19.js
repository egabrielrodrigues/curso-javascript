// 1️⃣ Function Declaration (declaração de função)
// Pode ser chamada antes ou depois da sua definição
function calcular() {
  console.log("calcular");
}

// 2️⃣ Function Expression (expressão de função)
// É atribuída a uma variável, só pode ser chamada depois de definida
const calcular2 = function () {
  console.log("calcular 2");
};

// 3️⃣ Arrow Function (função de seta)
// Sintaxe mais curta, muito usada em funções anônimas e callbacks
const calcular3 = () => console.log("calcular3");

// Chamadas das funções
calcular(); // "calcular"
calcular2(); // "calcular 2"
calcular3(); // "calcular3"
