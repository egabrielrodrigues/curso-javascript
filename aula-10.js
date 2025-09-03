// Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma
// viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você
// o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se fornecer
// o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h).
// Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros
// seriam necessários. Mostre o valor com 3 casas decimais após o ponto.

// Entrada
// O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem
// (em horas) e o segundo é a velocidade média durante a mesma (em km/h).

// Saída
// Imprima a quantidade de litros necessária para realizar a viagem, com três
// dígitos após o ponto decimal

// Exemplo de EntradaExemplo de Saída

// entrada1: 10
// entrada2: 85

// saída: 70.833

// entrada1: 2
// entrada2: 92

// saída: 15.333

// entrada1: 22
// entrada2: 67

// saída: 122.833

// Constante que representa quantos km o carro percorre por litro
const CONSUMO_AUTOMOVEL = 12;

// Declara uma função que calcula o gasto de combustível
// Recebe como parâmetros: tempoGasto (em horas) e velocidadeMedia (em km/h)
function gastoCombustivel(tempoGasto, velocidadeMedia) {
  // Calcula a distância percorrida: distância = velocidade * tempo
  const distancia = velocidadeMedia * tempoGasto;

  // Calcula o consumo de combustível: distância / consumo do automóvel
  const consumoFinal = distancia / CONSUMO_AUTOMOVEL;

  // Retorna o valor do consumo formatado com 3 casas decimais
  return consumoFinal.toFixed(3);
}

// Testes da função com os valores de exemplo
console.log(gastoCombustivel(10, 85)); // 70.833
console.log(gastoCombustivel(2, 92)); // 15.333
console.log(gastoCombustivel(22, 67)); // 122.833
