// Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos 
// números que NÂO são múltiplos de 13 entre X e Y, incluindo ambos.

// Entrada
// O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente 
// em ordem crescente.

// Saída
// Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores 
// lidos na entrada, inclusive ambos se for o caso.

// Exemplo de saída

// Entrada1: 100
// Entrada2: 200

// Saída: 13954

function multiplos(x, y) {
    let soma = 0;

    // garante que X seja o menor e Y o maior
    let inicio = Math.min(x, y);
    let fim = Math.max(x, y);

    for (let i = inicio; i <= fim; i++) {
        if (i % 13 !== 0) { // soma apenas os NÃO múltiplos de 13
            soma += i;
        }
    }

    console.log(soma);
}

multiplos(100, 200);