// try {} catch(error) {} → Estrutura usada para tratar erros

function calcular(valor) {
  // Se o valor for 0, lança (throw) um erro personalizado
  if (valor === 0) {
    throw new Error("Mensagem de erro: Não pode ser 0");
  }

  // Caso não seja 0, retorna o valor dividido por 2
  return valor / 2;
}

try {
  // Aqui chamamos a função com o valor 0 → isso vai gerar um erro
  const resultado = calcular(0);
  console.log("resultado", resultado); // Não será executado
} catch (error) {
  // O erro lançado no "throw" é capturado aqui
  console.log(error.message); // "Mensagem de erro: Não pode ser 0"
} finally {
  // O bloco finally sempre será executado
  console.log("chego no finally em qualquer circunstancia");
}

console.log("depois do Try Continua "); // Continua a execução do programa normalmente
